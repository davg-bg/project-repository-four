// Sistema de Persistência Local para CCB
// Gerencia o armazenamento de dados no localStorage do navegador

class LocalStorage {
    constructor() {
        this.keys = {
            tools: 'ccb-tools',
            events: 'ccb-events', 
            members: 'ccb-members',
            toolRequests: 'ccb-tool-requests',
            recentActivities: 'ccb-recent-activities',
            maintenanceSchedule: 'ccb-maintenance-schedule',
            nextIds: 'ccb-next-ids'
        };
        
        this.defaultData = {
            tools: [],
            events: [],
            members: [],
            toolRequests: [],
            recentActivities: [],
            maintenanceSchedule: [],
            nextIds: {
                tool: 1,
                event: 1,
                member: 1,
                request: 1,
                activity: 1,
                maintenance: 1
            }
        };
    }

    // Salvar dados no localStorage
    save(key, data) {
        try {
            localStorage.setItem(this.keys[key], JSON.stringify(data));
            console.log(`Dados salvos: ${key}`);
            return true;
        } catch (error) {
            console.error(`Erro ao salvar ${key}:`, error);
            this.showStorageError();
            return false;
        }
    }

    // Carregar dados do localStorage
    load(key) {
        try {
            const data = localStorage.getItem(this.keys[key]);
            if (data) {
                return JSON.parse(data);
            }
            return this.defaultData[key] || [];
        } catch (error) {
            console.error(`Erro ao carregar ${key}:`, error);
            return this.defaultData[key] || [];
        }
    }

    // Verificar se existem dados salvos
    hasData(key) {
        return localStorage.getItem(this.keys[key]) !== null;
    }

    // Limpar todos os dados
    clearAll() {
        Object.values(this.keys).forEach(key => {
            localStorage.removeItem(key);
        });
        console.log('Todos os dados foram limpos');
    }

    // Exportar todos os dados
    exportAll() {
        const allData = {};
        Object.keys(this.keys).forEach(key => {
            allData[key] = this.load(key);
        });
        
        const dataStr = JSON.stringify(allData, null, 2);
        const dataBlob = new Blob([dataStr], {type: 'application/json'});
        const url = URL.createObjectURL(dataBlob);
        
        const link = document.createElement('a');
        link.href = url;
        link.download = `ccb-backup-${new Date().toISOString().split('T')[0]}.json`;
        link.click();
        
        URL.revokeObjectURL(url);
        console.log('Dados exportados com sucesso');
    }

    // Importar dados de arquivo
    importAll(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = (e) => {
                try {
                    const data = JSON.parse(e.target.result);
                    
                    // Salvar cada tipo de dado
                    Object.keys(data).forEach(key => {
                        if (this.keys[key]) {
                            this.save(key, data[key]);
                        }
                    });
                    
                    console.log('Dados importados com sucesso');
                    resolve(true);
                } catch (error) {
                    console.error('Erro ao importar dados:', error);
                    reject(error);
                }
            };
            reader.onerror = reject;
            reader.readAsText(file);
        });
    }

    // Verificar espaço disponível no localStorage
    getStorageInfo() {
        let totalSize = 0;
        Object.values(this.keys).forEach(key => {
            const data = localStorage.getItem(key);
            if (data) {
                totalSize += data.length;
            }
        });
        
        return {
            usedBytes: totalSize,
            usedMB: (totalSize / 1024 / 1024).toFixed(2),
            estimatedLimit: '5-10MB'
        };
    }

    // Mostrar erro de armazenamento
    showStorageError() {
        if (window.showNotification) {
            showNotification('Erro ao salvar dados. Verifique o espaço disponível.', 'error');
        } else {
            alert('Erro ao salvar dados no navegador. Verifique se há espaço disponível.');
        }
    }

    // Inicializar dados padrão se não existirem
    initializeDefaultData() {
        // Verificar se é a primeira vez
        const isFirstTime = !this.hasData('tools') && !this.hasData('events');
        
        if (isFirstTime) {
            console.log('Primeira execução - carregando dados de exemplo');
            
            // Carregar dados de exemplo do arquivo dados-exemplo.json
            if (typeof dadosExemplo !== 'undefined' && dadosExemplo.length > 0) {
                this.save('tools', dadosExemplo);
            }
            
            // Salvar outros dados padrão
            this.save('events', this.defaultData.events);
            this.save('members', this.defaultData.members);
            this.save('toolRequests', this.defaultData.toolRequests);
            this.save('recentActivities', this.defaultData.recentActivities);
            this.save('maintenanceSchedule', this.defaultData.maintenanceSchedule);
            this.save('nextIds', this.defaultData.nextIds);
            
            return true;
        }
        
        return false;
    }
}

// Criar instância global
const storage = new LocalStorage();

// Funções de conveniência para usar no código principal
function saveToLocal(key, data) {
    return storage.save(key, data);
}

function loadFromLocal(key) {
    return storage.load(key);
}

function hasLocalData(key) {
    return storage.hasData(key);
}

// Auto-save: salvar dados automaticamente quando modificados
function autoSave() {
    saveToLocal('tools', tools);
    saveToLocal('events', events);
    saveToLocal('members', members);
    saveToLocal('toolRequests', toolRequests);
    saveToLocal('recentActivities', recentActivities);
    saveToLocal('maintenanceSchedule', maintenanceSchedule);
    saveToLocal('nextIds', {
        tool: nextId,
        event: nextEventId,
        member: nextMemberId,
        request: nextRequestId
    });
}

// Carregar todos os dados do localStorage
function loadAllData() {
    // Carregar ferramentas
    const savedTools = loadFromLocal('tools');
    if (savedTools && savedTools.length > 0) {
        tools = savedTools;
    }
    
    // Carregar eventos
    const savedEvents = loadFromLocal('events');
    if (savedEvents && savedEvents.length > 0) {
        events = savedEvents;
    }
    
    // Carregar membros
    const savedMembers = loadFromLocal('members');
    if (savedMembers && savedMembers.length > 0) {
        members = savedMembers;
    }
    
    // Carregar solicitações
    const savedRequests = loadFromLocal('toolRequests');
    if (savedRequests && savedRequests.length > 0) {
        toolRequests = savedRequests;
    }
    
    // Carregar atividades recentes
    const savedActivities = loadFromLocal('recentActivities');
    if (savedActivities && savedActivities.length > 0) {
        recentActivities = savedActivities;
    }
    
    // Carregar cronograma de manutenção
    const savedMaintenance = loadFromLocal('maintenanceSchedule');
    if (savedMaintenance && savedMaintenance.length > 0) {
        maintenanceSchedule = savedMaintenance;
    }
    
    // Carregar próximos IDs
    const savedIds = loadFromLocal('nextIds');
    if (savedIds) {
        nextId = savedIds.tool || nextId;
        nextEventId = savedIds.event || nextEventId;
        nextMemberId = savedIds.member || nextMemberId;
        nextRequestId = savedIds.request || nextRequestId;
    }
    
    console.log('Dados carregados do localStorage');
}

// Adicionar atividade recente
function addRecentActivity(type, description) {
    const activity = {
        id: Date.now(),
        type: type,
        description: description,
        timestamp: new Date().toISOString().replace('T', ' ').substring(0, 16)
    };
    
    recentActivities.unshift(activity);
    
    // Manter apenas as últimas 20 atividades
    if (recentActivities.length > 20) {
        recentActivities = recentActivities.slice(0, 20);
    }
    
    autoSave();
}

// Função para resetar dados (útil para desenvolvimento)
function resetAllData() {
    if (confirm('Tem certeza que deseja resetar todos os dados? Esta ação não pode ser desfeita.')) {
        storage.clearAll();
        location.reload();
    }
}

// Função para backup manual
function backupData() {
    storage.exportAll();
    showNotification('Backup realizado com sucesso!', 'success');
}

// Função para restaurar backup
function restoreData(file) {
    storage.importAll(file)
        .then(() => {
            showNotification('Dados restaurados com sucesso!', 'success');
            setTimeout(() => location.reload(), 1500);
        })
        .catch(error => {
            showNotification('Erro ao restaurar dados: ' + error.message, 'error');
        });
}

// Exportar para uso global
window.storage = storage;
window.saveToLocal = saveToLocal;
window.loadFromLocal = loadFromLocal;
window.hasLocalData = hasLocalData;
window.autoSave = autoSave;
window.loadAllData = loadAllData;
window.addRecentActivity = addRecentActivity;
window.resetAllData = resetAllData;
window.backupData = backupData;
window.restoreData = restoreData;
