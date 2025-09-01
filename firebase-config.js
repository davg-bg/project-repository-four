// Configuração do Firebase para CCB
// IMPORTANTE: Substitua pelas suas credenciais do Firebase Console

const firebaseConfig = {
    apiKey: "AIzaSyBUNzXRaFH-5-_HUu9VwJ8IaFWrP8zdXhE",
    authDomain: "ccb-sistema-2d704.firebaseapp.com",
    projectId: "ccb-sistema-2d704",
    storageBucket: "ccb-sistema-2d704.firebasestorage.app",
    messagingSenderId: "543689299581",
    appId: "1:543689299581:web:503be2f5b422dafcfc0314"
};

// Inicializar Firebase (será chamado após carregar o SDK)
let db;
let isFirebaseEnabled = false;

function initializeFirebase() {
    try {
        // Verificar se Firebase SDK está disponível
        if (typeof firebase === 'undefined') {
            console.log('Firebase SDK não carregado - usando localStorage apenas');
            return false;
        }

        // Inicializar Firebase
        firebase.initializeApp(firebaseConfig);
        db = firebase.firestore();
        isFirebaseEnabled = true;
        
        console.log('Firebase inicializado com sucesso!');
        
        // Configurar listeners em tempo real
        setupRealtimeListeners();
        
        return true;
    } catch (error) {
        console.error('Erro ao inicializar Firebase:', error);
        console.log('Continuando com localStorage apenas');
        return false;
    }
}

// Configurar listeners para sincronização em tempo real
function setupRealtimeListeners() {
    if (!isFirebaseEnabled) return;
    
    console.log('Configurando listeners em tempo real...');
    
    // Listener para ferramentas
    db.collection('tools').onSnapshot((snapshot) => {
        console.log('Snapshot recebido para tools:', snapshot.size, 'documentos');
        const firebaseTools = [];
        snapshot.forEach((doc) => {
            firebaseTools.push({ ...doc.data(), id: doc.data().id || doc.id });
        });
        
        // Sempre atualizar para garantir sincronização
        if (typeof window !== 'undefined' && window.tools) {
            // Verificar se há mudanças antes de atualizar
            const hasChanges = firebaseTools.length !== window.tools.length || 
                firebaseTools.some(fbTool => !window.tools.find(localTool => localTool.id === fbTool.id));
            
            if (hasChanges) {
                // Atualizar array global sem quebrar proxies
                const currentTools = window.tools;
                currentTools.splice(0, currentTools.length, ...firebaseTools);
                
                if (typeof loadToolsTable === 'function') loadToolsTable();
                if (typeof loadDashboard === 'function') loadDashboard();
                console.log('🔄 Ferramentas sincronizadas do Firebase:', firebaseTools.length);
            }
        }
    }, (error) => {
        console.error('Erro no listener de tools:', error);
    });
    
    // Listener para eventos
    db.collection('events').onSnapshot((snapshot) => {
        const firebaseEvents = [];
        snapshot.forEach((doc) => {
            firebaseEvents.push({ ...doc.data(), id: doc.data().id || doc.id });
        });
        
        if (typeof window !== 'undefined' && window.events) {
            const currentEvents = window.events;
            currentEvents.splice(0, currentEvents.length, ...firebaseEvents);
            
            if (typeof loadEventsGrid === 'function') loadEventsGrid();
            if (typeof loadDashboard === 'function') loadDashboard();
            console.log('Eventos sincronizados do Firebase:', firebaseEvents.length);
        }
    }, (error) => {
        console.error('Erro no listener de events:', error);
    });
    
    // Listener para membros
    db.collection('members').onSnapshot((snapshot) => {
        const firebaseMembers = [];
        snapshot.forEach((doc) => {
            firebaseMembers.push({ ...doc.data(), id: doc.data().id || doc.id });
        });
        
        if (typeof window !== 'undefined' && window.members) {
            const currentMembers = window.members;
            currentMembers.splice(0, currentMembers.length, ...firebaseMembers);
            
            if (typeof loadMembersGrid === 'function') loadMembersGrid();
            console.log('Membros sincronizados do Firebase:', firebaseMembers.length);
        }
    }, (error) => {
        console.error('Erro no listener de members:', error);
    });
    
    // Listener para solicitações
    db.collection('toolRequests').onSnapshot((snapshot) => {
        const firebaseRequests = [];
        snapshot.forEach((doc) => {
            firebaseRequests.push({ ...doc.data(), id: doc.data().id || doc.id });
        });
        
        if (typeof window !== 'undefined' && window.toolRequests) {
            const currentRequests = window.toolRequests;
            currentRequests.splice(0, currentRequests.length, ...firebaseRequests);
            
            if (typeof loadToolRequestsTable === 'function') loadToolRequestsTable();
            console.log('Solicitações sincronizadas do Firebase:', firebaseRequests.length);
        }
    }, (error) => {
        console.error('Erro no listener de toolRequests:', error);
    });
}

// Salvar dados no Firebase
async function saveToFirebase(collection, data) {
    if (!isFirebaseEnabled) {
        return saveToLocal(collection, data); // Fallback para localStorage
    }
    
    try {
        // Usar ID numérico como string para documento
        const docId = data.id.toString();
        await db.collection(collection).doc(docId).set(data);
        
        console.log(`✅ Dados salvos no Firebase: ${collection}/${docId}`, data);
        return true;
    } catch (error) {
        console.error(`❌ Erro ao salvar no Firebase (${collection}):`, error);
        return saveToLocal(collection, data); // Fallback
    }
}

// Deletar dados do Firebase
async function deleteFromFirebase(collection, id) {
    if (!isFirebaseEnabled) {
        return true; // localStorage é gerenciado localmente
    }
    
    try {
        await db.collection(collection).doc(id.toString()).delete();
        console.log(`Dados deletados do Firebase: ${collection}/${id}`);
        return true;
    } catch (error) {
        console.error(`Erro ao deletar do Firebase (${collection}/${id}):`, error);
        return false;
    }
}

// Verificar status da conexão
function getConnectionStatus() {
    return {
        firebase: isFirebaseEnabled,
        localStorage: typeof(Storage) !== "undefined",
        online: navigator.onLine
    };
}

// Exportar funções para uso global
window.initializeFirebase = initializeFirebase;
window.saveToFirebase = saveToFirebase;
window.deleteFromFirebase = deleteFromFirebase;
window.getConnectionStatus = getConnectionStatus;
window.isFirebaseEnabled = () => isFirebaseEnabled;
