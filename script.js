// Dados das ferramentas (simulando um banco de dados)
let tools = [
    {
        id: 1,
        code: 'F001',
        name: 'Furadeira Elétrica Bosch',
        category: 'eletrica',
        status: 'disponivel',
        location: 'Almoxarifado A',
        purchaseDate: '2023-01-15',
        lastMaintenance: '2024-01-10',
        description: 'Furadeira elétrica profissional 1100W'
    },
    {
        id: 2,
        code: 'F002',
        name: 'Serra Circular Makita',
        category: 'eletrica',
        status: 'em-uso',
        location: 'Obra Norte',
        purchaseDate: '2023-03-20',
        lastMaintenance: '2024-02-15',
        description: 'Serra circular 7 1/4" 1200W'
    },
    {
        id: 3,
        code: 'F003',
        name: 'Chave de Fenda 10mm',
        category: 'manual',
        status: 'disponivel',
        location: 'Almoxarifado B',
        purchaseDate: '2023-06-10',
        lastMaintenance: '2024-01-20',
        description: 'Chave de fenda profissional'
    },
    {
        id: 4,
        code: 'F004',
        name: 'Compressor de Ar',
        category: 'pneumatica',
        status: 'manutencao',
        location: 'Oficina Central',
        purchaseDate: '2022-11-05',
        lastMaintenance: '2024-03-01',
        description: 'Compressor de ar 100L 2HP'
    },
    {
        id: 5,
        code: 'F005',
        name: 'Betoneira 400L',
        category: 'hidraulica',
        status: 'disponivel',
        location: 'Pátio de Máquinas',
        purchaseDate: '2023-08-12',
        lastMaintenance: '2024-02-28',
        description: 'Betoneira elétrica 400 litros'
    },
    {
        id: 6,
        code: 'A001',
        name: 'Sistema de Som JBL',
        category: 'audio',
        status: 'disponivel',
        location: 'Sala de Culto',
        purchaseDate: '2023-09-15',
        lastMaintenance: '2024-02-10',
        description: 'Sistema de som profissional para igreja'
    },
    {
        id: 7,
        code: 'V001',
        name: 'Projetor Epson',
        category: 'video',
        status: 'em-uso',
        location: 'Sala de Culto',
        purchaseDate: '2023-10-20',
        lastMaintenance: '2024-01-25',
        description: 'Projetor multimídia para apresentações'
    },
    {
        id: 8,
        code: 'I001',
        name: 'Refletores LED',
        category: 'iluminacao',
        status: 'disponivel',
        location: 'Palco Principal',
        purchaseDate: '2023-11-05',
        lastMaintenance: '2024-02-20',
        description: 'Kit de iluminação LED para palco'
    }
];

// Dados de eventos
let events = [
    {
        id: 1,
        title: 'Culto de Domingo',
        type: 'culto',
        date: '2024-03-17',
        time: '18:00',
        description: 'Culto dominical com louvor e pregação',
        status: 'agendado'
    },
    {
        id: 2,
        title: 'Estudo Bíblico',
        type: 'estudo',
        date: '2024-03-19',
        time: '19:30',
        description: 'Estudo bíblico sobre o livro de João',
        status: 'agendado'
    },
    {
        id: 3,
        title: 'Círculo de Oração',
        type: 'oracao',
        date: '2024-03-20',
        time: '20:00',
        description: 'Momento de oração e intercessão',
        status: 'agendado'
    },
    {
        id: 4,
        title: 'Encontro de Jovens',
        type: 'jovens',
        date: '2024-03-23',
        time: '19:00',
        description: 'Encontro especial para jovens da igreja',
        status: 'agendado'
    }
];

// Dados de membros
let members = [
    {
        id: 1,
        name: 'João Silva',
        email: 'joao.silva@email.com',
        phone: '(11) 99999-1111',
        birthdate: '1985-03-15',
        ministry: 'musica',
        status: 'ativo',
        joinDate: '2020-01-10'
    },
    {
        id: 2,
        name: 'Maria Santos',
        email: 'maria.santos@email.com',
        phone: '(11) 99999-2222',
        birthdate: '1990-07-22',
        ministry: 'jovens',
        status: 'ativo',
        joinDate: '2019-05-20'
    },
    {
        id: 3,
        name: 'Pedro Costa',
        email: 'pedro.costa@email.com',
        phone: '(11) 99999-3333',
        birthdate: '1978-11-08',
        ministry: 'oracao',
        status: 'ativo',
        joinDate: '2018-03-15'
    },
    {
        id: 4,
        name: 'Ana Oliveira',
        email: 'ana.oliveira@email.com',
        phone: '(11) 99999-4444',
        birthdate: '1995-04-12',
        ministry: 'criancas',
        status: 'ativo',
        joinDate: '2021-08-30'
    }
];

// Dados de manutenção agendada
let maintenanceSchedule = [
    {
        id: 1,
        toolId: 4,
        toolName: 'Compressor de Ar',
        type: 'preventiva',
        priority: 'media',
        scheduledDate: '2024-03-15',
        scheduledTime: '09:00',
        description: 'Manutenção preventiva mensal',
        technician: 'João Silva',
        status: 'agendada'
    }
];

// Dados de solicitações de ferramentas
let toolRequests = [
    {
        id: 1,
        requester: 'Carlos Mendes',
        ministry: 'musica',
        toolName: 'Microfone Sem Fio',
        category: 'audio',
        priority: 'alta',
        needDate: '2024-03-20',
        phone: '(11) 99999-5555',
        email: 'carlos.mendes@email.com',
        reason: 'Necessário para apresentação musical no próximo domingo',
        observations: 'Preferencialmente com suporte para pedestal',
        status: 'pendente',
        requestDate: '2024-03-10',
        requestTime: '14:30'
    },
    {
        id: 2,
        requester: 'Fernanda Lima',
        ministry: 'tecnologia',
        toolName: 'Cabo HDMI 10m',
        category: 'video',
        priority: 'media',
        needDate: '2024-03-25',
        phone: '(11) 99999-6666',
        email: 'fernanda.lima@email.com',
        reason: 'Para conectar projetor ao computador na sala de estudos',
        observations: 'Cabo de boa qualidade para evitar interferência',
        status: 'aprovada',
        requestDate: '2024-03-08',
        requestTime: '10:15'
    }
];

// Atividades recentes
let recentActivities = [
    {
        id: 1,
        type: 'tool_added',
        description: 'Nova ferramenta adicionada: Sistema de Som JBL',
        timestamp: '2024-03-15 14:30'
    },
    {
        id: 2,
        type: 'event_created',
        description: 'Novo evento criado: Encontro de Jovens',
        timestamp: '2024-03-15 10:15'
    },
    {
        id: 3,
        type: 'member_joined',
        description: 'Novo membro: Ana Oliveira',
        timestamp: '2024-03-14 16:45'
    },
    {
        id: 4,
        type: 'maintenance_scheduled',
        description: 'Manutenção agendada: Compressor de Ar',
        timestamp: '2024-03-14 09:20'
    }
];

let nextId = 9;
let nextEventId = 5;
let nextMemberId = 5;
let nextRequestId = 3;

document.addEventListener('DOMContentLoaded', function() {
    // Mostrar loading screen
    showLoadingScreen();
    
    // Inicializar Firebase primeiro
    const firebaseInitialized = initializeFirebase();
    
    // Carregar dados salvos do localStorage
    loadAllData();
    
    // Se não há dados salvos, inicializar com dados de exemplo
    if (!hasLocalData('tools')) {
        storage.initializeDefaultData();
        loadAllData();
    }
    
    // Se Firebase foi inicializado, migrar dados locais para Firebase
    if (firebaseInitialized) {
        setTimeout(() => {
            migrateLocalDataToFirebase();
        }, 1000);
    }
    
    // Simular carregamento
    setTimeout(() => {
        hideLoadingScreen();
        initializeApp();
    }, 3000);
});

function showLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    loadingScreen.style.display = 'flex';
}

function hideLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    loadingScreen.classList.add('hidden');
    setTimeout(() => {
        loadingScreen.style.display = 'none';
    }, 500);
}

function initializeApp() {
    // Configurar navegação
    setupNavigation();
    
    // Carregar dados iniciais
    loadDashboard();
    loadToolsTable();
    loadEventsGrid();
    loadMembersGrid();
    loadToolRequestsTable();
    
    // Configurar formulários
    setupForms();
    
    // Configurar filtros
    setupFilters();
    
    // Configurar formulário de manutenção
    setupMaintenanceForm();
    
    // Iniciar mensagens inspiradoras
    startInspirationalMessages();
    
    // Adicionar animações de entrada
    addEntranceAnimations();
}

function addEntranceAnimations() {
    const elements = document.querySelectorAll('.stat-card, .action-btn, .widget');
    elements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            element.style.transition = 'all 0.6s ease';
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

function startInspirationalMessages() {
    const messages = [
        { text: "Porque para Deus nada é impossível", verse: "Lucas 1:37" },
        { text: "Tudo posso naquele que me fortalece", verse: "Filipenses 4:13" },
        { text: "O Senhor é meu pastor, nada me faltará", verse: "Salmos 23:1" },
        { text: "Bendito seja o nome do Senhor", verse: "Jó 1:21" },
        { text: "A graça do Senhor Jesus seja com todos", verse: "Apocalipse 22:21" }
    ];
    
    let currentIndex = 0;
    let messageCount = 0;
    const maxMessages = CCB_CONFIG.notifications.maxMessages || 5;
    
    function showMessage() {
        if (messageCount >= maxMessages) {
            return; // Para após 5 mensagens
        }
        
        const messageContainer = document.getElementById('inspirational-messages');
        if (!messageContainer) return;
        
        const message = messages[currentIndex];
        
        messageContainer.innerHTML = `
            <div class="inspirational-message animate__animated animate__fadeInDown">
                <h3>${message.text}</h3>
                <p>— ${message.verse}</p>
            </div>
        `;
        
        currentIndex = (currentIndex + 1) % messages.length;
        messageCount++;
    }
    
    // Mostrar primeira mensagem
    setTimeout(showMessage, 2000);
    
    // Trocar mensagem a cada 8 segundos, máximo 5 vezes
    const messageInterval = setInterval(() => {
        showMessage();
        if (messageCount >= maxMessages) {
            clearInterval(messageInterval);
        }
    }, 8000);
}

// Navegação
function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remover classe active de todos os links
            navLinks.forEach(l => l.classList.remove('active'));
            
            // Adicionar classe active ao link clicado
            this.classList.add('active');
            
            // Mostrar seção correspondente
            const targetId = this.getAttribute('href').substring(1);
            showSection(targetId);
        });
    });
}

function showSection(sectionId) {
    // Esconder todas as seções
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.classList.remove('active'));
    
    // Mostrar seção selecionada
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
    }
    
    // Atualizar dados da seção se necessário
    if (sectionId === 'home') {
        loadDashboard();
    } else if (sectionId === 'ferramentas') {
        loadToolsTable();
    } else if (sectionId === 'eventos') {
        loadEventsGrid();
    } else if (sectionId === 'membros') {
        loadMembersGrid();
    }
}

// Dashboard
function loadDashboard() {
    updateStats();
    loadUpcomingEvents();
    loadRecentActivities();
}

function loadUpcomingEvents() {
    const eventsList = document.getElementById('upcoming-events-list');
    if (!eventsList) return;
    
    const upcomingEvents = events
        .filter(event => new Date(event.date) >= new Date())
        .sort((a, b) => new Date(a.date) - new Date(b.date))
        .slice(0, 5);
    
    eventsList.innerHTML = upcomingEvents.map(event => `
        <div class="event-item">
            <h4>${event.title}</h4>
            <p>${formatDate(event.date)} às ${event.time}</p>
        </div>
    `).join('');
}

function loadRecentActivities() {
    const activitiesList = document.getElementById('recent-activities-list');
    if (!activitiesList) return;
    
    const recent = recentActivities
        .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
        .slice(0, 5);
    
    activitiesList.innerHTML = recent.map(activity => `
        <div class="activity-item">
            <h4>${activity.description}</h4>
            <p>${formatDateTime(activity.timestamp)}</p>
        </div>
    `).join('');
}

function loadEventsGrid() {
    const eventsGrid = document.getElementById('events-grid');
    if (!eventsGrid) return;
    
    eventsGrid.innerHTML = events.map(event => `
        <div class="event-card">
            <span class="event-type">${getEventTypeLabel(event.type)}</span>
            <h3>${event.title}</h3>
            <div class="event-date">${formatDate(event.date)} às ${event.time}</div>
            <div class="event-description">${event.description}</div>
        </div>
    `).join('');
}

function loadMembersGrid() {
    const membersGrid = document.getElementById('members-grid');
    if (!membersGrid) return;
    
    membersGrid.innerHTML = members.map(member => `
        <div class="member-card">
            <div class="member-avatar">
                <i class="fas fa-user"></i>
            </div>
            <h3>${member.name}</h3>
            <span class="member-ministry">${getMinistryLabel(member.ministry)}</span>
            <div class="member-status">${getStatusLabel(member.status)}</div>
            <div class="member-contact">${member.email}</div>
        </div>
    `).join('');
}

function loadToolRequestsTable() {
    const tableBody = document.getElementById('tool-requests-table-body');
    if (!tableBody) return;
    
    tableBody.innerHTML = '';
    
    toolRequests.forEach(request => {
        const row = createToolRequestRow(request);
        tableBody.appendChild(row);
    });
}

function createToolRequestRow(request) {
    const row = document.createElement('tr');
    
    const priorityClass = getPriorityClass(request.priority);
    const statusClass = getRequestStatusClass(request.status);
    
    row.innerHTML = `
        <td>
            <div class="requester-info">
                <strong>${request.requester}</strong>
                <small>${request.phone || ''}</small>
            </div>
        </td>
        <td>
            <div class="tool-info">
                <strong>${request.toolName}</strong>
                <small>${getCategoryText(request.category)}</small>
            </div>
        </td>
        <td>${getMinistryLabel(request.ministry)}</td>
        <td>
            <span class="priority-badge ${priorityClass}">
                ${getPriorityLabel(request.priority)}
            </span>
        </td>
        <td>${formatDate(request.needDate)}</td>
        <td>
            <span class="status-badge ${statusClass}">
                ${getRequestStatusLabel(request.status)}
            </span>
        </td>
        <td>
            <div class="action-buttons">
                <button class="btn-icon btn-view" onclick="viewToolRequest(${request.id})" title="Visualizar">
                    <i class="fas fa-eye"></i>
                </button>
                <button class="btn-icon btn-edit" onclick="editToolRequest(${request.id})" title="Editar">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="btn-icon btn-delete" onclick="deleteToolRequest(${request.id})" title="Excluir">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        </td>
    `;
    
    return row;
}

function getEventTypeLabel(type) {
    const typeMap = {
        'culto': 'Culto',
        'estudo': 'Estudo Bíblico',
        'oracao': 'Círculo de Oração',
        'jovens': 'Encontro de Jovens',
        'criancas': 'Escola Bíblica',
        'outro': 'Outro'
    };
    return typeMap[type] || type;
}

function getMinistryLabel(ministry) {
    const ministryMap = {
        'musica': 'Música',
        'jovens': 'Jovens',
        'criancas': 'Crianças',
        'oracao': 'Oração',
        'evangelismo': 'Evangelismo',
        'outro': 'Outro'
    };
    return ministryMap[ministry] || ministry;
}

function getStatusLabel(status) {
    const statusMap = {
        'ativo': 'Ativo',
        'inativo': 'Inativo',
        'visitante': 'Visitante'
    };
    return statusMap[status] || status;
}

function getPriorityLabel(priority) {
    const priorityMap = {
        'baixa': 'Baixa',
        'media': 'Média',
        'alta': 'Alta',
        'urgente': 'Urgente'
    };
    return priorityMap[priority] || priority;
}

function getPriorityClass(priority) {
    const classMap = {
        'baixa': 'priority-low',
        'media': 'priority-medium',
        'alta': 'priority-high',
        'urgente': 'priority-urgent'
    };
    return classMap[priority] || 'priority-medium';
}

function getRequestStatusLabel(status) {
    const statusMap = {
        'pendente': 'Pendente',
        'aprovada': 'Aprovada',
        'rejeitada': 'Rejeitada',
        'concluida': 'Concluída'
    };
    return statusMap[status] || status;
}

function getRequestStatusClass(status) {
    const classMap = {
        'pendente': 'status-pending',
        'aprovada': 'status-approved',
        'rejeitada': 'status-rejected',
        'concluida': 'status-completed'
    };
    return classMap[status] || 'status-pending';
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR');
}

function formatDateTime(dateTimeString) {
    const date = new Date(dateTimeString);
    return date.toLocaleString('pt-BR');
}

function updateStats() {
    const totalTools = tools.length;
    const availableTools = tools.filter(tool => tool.status === 'disponivel').length;
    const inUseTools = tools.filter(tool => tool.status === 'em-uso').length;
    const maintenanceTools = tools.filter(tool => tool.status === 'manutencao').length;
    
    document.getElementById('total-ferramentas').textContent = totalTools;
    document.getElementById('ferramentas-disponiveis').textContent = availableTools;
    document.getElementById('ferramentas-em-uso').textContent = inUseTools;
    document.getElementById('ferramentas-manutencao').textContent = maintenanceTools;
}

// Função para filtrar por status (ações do dashboard)
function filterByStatus(status) {
    // Navegar para a aba ferramentas
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(l => l.classList.remove('active'));
    document.querySelector('a[href="#ferramentas"]').classList.add('active');
    showSection('ferramentas');
    
    // Aplicar filtro
    if (status) {
        document.getElementById('status-filter').value = status;
    } else {
        document.getElementById('status-filter').value = '';
    }
    
    // Aplicar filtros
    filterTools();
}

// Tabela de Ferramentas
function loadToolsTable() {
    const tableBody = document.getElementById('tools-table-body');
    tableBody.innerHTML = '';
    
    tools.forEach(tool => {
        const row = createToolRow(tool);
        tableBody.appendChild(row);
    });
}

function createToolRow(tool) {
    const row = document.createElement('tr');
    
    const statusClass = `status-${tool.status}`;
    const statusText = getStatusText(tool.status);
    const categoryText = getCategoryText(tool.category);
    
    row.innerHTML = `
        <td>${tool.code}</td>
        <td>${tool.name}</td>
        <td>${categoryText}</td>
        <td><span class="status-badge ${statusClass}">${statusText}</span></td>
        <td>${tool.location}</td>
        <td>${formatDate(tool.lastMaintenance)}</td>
        <td class="action-buttons">
            <button class="btn-icon btn-edit" onclick="editTool(${tool.id})" title="Editar">
                <i class="fas fa-edit"></i>
            </button>
            <button class="btn-icon btn-delete" onclick="deleteTool(${tool.id})" title="Excluir">
                <i class="fas fa-trash"></i>
            </button>
        </td>
    `;
    
    return row;
}

function getStatusText(status) {
    const statusMap = {
        'disponivel': 'Disponível',
        'em-uso': 'Em Uso',
        'manutencao': 'Em Manutenção',
        'inativo': 'Inativo'
    };
    return statusMap[status] || status;
}

function getCategoryText(category) {
    const categoryMap = {
        'eletrica': 'Elétrica',
        'manual': 'Manual',
        'hidraulica': 'Hidráulica',
        'pneumatica': 'Pneumática',
        'audio': 'Áudio',
        'video': 'Vídeo',
        'iluminacao': 'Iluminação'
    };
    return categoryMap[category] || category;
}

function formatDate(dateString) {
    if (!dateString) return '-';
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR');
}

// Filtros
function setupFilters() {
    const statusFilter = document.getElementById('status-filter');
    const categoryFilter = document.getElementById('category-filter');
    const searchInput = document.getElementById('search-input');
    
    if (statusFilter) {
        statusFilter.addEventListener('change', filterTools);
    }
    if (categoryFilter) {
        categoryFilter.addEventListener('change', filterTools);
    }
    if (searchInput) {
        searchInput.addEventListener('input', filterTools);
    }
}

function filterTools() {
    const statusFilter = document.getElementById('status-filter')?.value;
    const categoryFilter = document.getElementById('category-filter')?.value;
    const searchInput = document.getElementById('search-input')?.value.toLowerCase();
    
    let filteredTools = tools.filter(tool => {
        // Filtro por status
        if (statusFilter && tool.status !== statusFilter) {
            return false;
        }
        
        // Filtro por categoria
        if (categoryFilter && tool.category !== categoryFilter) {
            return false;
        }
        
        // Filtro por busca
        if (searchInput) {
            const searchText = `${tool.code} ${tool.name} ${tool.location}`.toLowerCase();
            if (!searchText.includes(searchInput)) {
                return false;
            }
        }
        
        return true;
    });
    
    displayFilteredTools(filteredTools);
}

function displayFilteredTools(filteredTools) {
    const tableBody = document.getElementById('tools-table-body');
    tableBody.innerHTML = '';
    
    if (filteredTools.length === 0) {
        tableBody.innerHTML = `
            <tr>
                <td colspan="7" style="text-align: center; padding: 2rem; color: var(--gray-500);">
                    Nenhuma ferramenta encontrada com os filtros aplicados.
                </td>
            </tr>
        `;
        return;
    }
    
    filteredTools.forEach(tool => {
        const row = createToolRow(tool);
        tableBody.appendChild(row);
    });
}

function filterToolRequests() {
    const statusFilter = document.getElementById('request-status-filter')?.value;
    const priorityFilter = document.getElementById('request-priority-filter')?.value;
    const searchInput = document.getElementById('request-search-input')?.value.toLowerCase();
    
    let filteredRequests = toolRequests.filter(request => {
        // Filtro por status
        if (statusFilter && request.status !== statusFilter) {
            return false;
        }
        
        // Filtro por prioridade
        if (priorityFilter && request.priority !== priorityFilter) {
            return false;
        }
        
        // Filtro por busca
        if (searchInput) {
            const searchText = `${request.requester} ${request.toolName} ${request.ministry}`.toLowerCase();
            if (!searchText.includes(searchInput)) {
                return false;
            }
        }
        
        return true;
    });
    
    displayFilteredToolRequests(filteredRequests);
}

function displayFilteredToolRequests(filteredRequests) {
    const tableBody = document.getElementById('tool-requests-table-body');
    tableBody.innerHTML = '';
    
    if (filteredRequests.length === 0) {
        tableBody.innerHTML = `
            <tr>
                <td colspan="7" style="text-align: center; padding: 2rem; color: var(--gray-500);">
                    Nenhuma solicitação encontrada com os filtros aplicados.
                </td>
            </tr>
        `;
        return;
    }
    
    filteredRequests.forEach(request => {
        const row = createToolRequestRow(request);
        tableBody.appendChild(row);
    });
}

// Modais
function showAddToolModal() {
    const modal = document.getElementById('add-tool-modal');
    modal.style.display = 'block';
    
    // Limpar formulário
    document.getElementById('add-tool-form').reset();
    
    // Definir data atual como padrão
    document.getElementById('tool-purchase-date').value = new Date().toISOString().split('T')[0];
}

function showEditToolModal(toolId) {
    const tool = tools.find(t => t.id === toolId);
    if (!tool) return;
    
    // Preencher formulário
    document.getElementById('edit-tool-id').value = tool.id;
    document.getElementById('edit-tool-code').value = tool.code;
    document.getElementById('edit-tool-name').value = tool.name;
    document.getElementById('edit-tool-category').value = tool.category;
    document.getElementById('edit-tool-status').value = tool.status;
    document.getElementById('edit-tool-location').value = tool.location;
    document.getElementById('edit-tool-purchase-date').value = tool.purchaseDate;
    document.getElementById('edit-tool-description').value = tool.description || '';
    
    // Mostrar modal
    const modal = document.getElementById('edit-tool-modal');
    modal.style.display = 'block';
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'none';
}

// Fechar modal ao clicar fora
window.addEventListener('click', function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});

// Formulários
function setupForms() {
    // Formulário de adicionar ferramenta
    const addToolForm = document.getElementById('add-tool-form');
    if (addToolForm) {
        addToolForm.addEventListener('submit', function(e) {
            e.preventDefault();
            addTool();
        });
    }
    
    // Formulário de editar ferramenta
    const editToolForm = document.getElementById('edit-tool-form');
    if (editToolForm) {
        editToolForm.addEventListener('submit', function(e) {
            e.preventDefault();
            updateTool();
        });
    }
    
    // Formulário de eventos
    const eventForm = document.getElementById('event-form');
    if (eventForm) {
        eventForm.addEventListener('submit', function(e) {
            e.preventDefault();
            addEvent();
        });
    }
    
    // Formulário de membros
    const memberForm = document.getElementById('member-form');
    if (memberForm) {
        memberForm.addEventListener('submit', function(e) {
            e.preventDefault();
            addMember();
        });
    }
    
    // Formulário de solicitação de ferramenta
    const toolRequestForm = document.getElementById('tool-request-form');
    if (toolRequestForm) {
        toolRequestForm.addEventListener('submit', function(e) {
            e.preventDefault();
            addToolRequest();
        });
    }
}

function addTool() {
    const formData = {
        code: document.getElementById('tool-code').value,
        name: document.getElementById('tool-name').value,
        category: document.getElementById('tool-category').value,
        status: document.getElementById('tool-status').value,
        location: document.getElementById('tool-location').value,
        purchaseDate: document.getElementById('tool-purchase-date').value,
        description: document.getElementById('tool-description').value
    };
    
    // Validação básica
    if (!formData.code || !formData.name || !formData.category || !formData.status || !formData.location) {
        showNotification('Por favor, preencha todos os campos obrigatórios.', 'error');
        return;
    }
    
    // Verificar se o código já existe
    if (tools.some(tool => tool.code === formData.code)) {
        showNotification('Já existe uma ferramenta com este código.', 'error');
        return;
    }
    
    const newTool = {
        id: nextId++,
        ...formData,
        lastMaintenance: new Date().toISOString().split('T')[0]
    };
    
    // Adicionar à lista
    tools.push(newTool);
    
    // Salvar no Firebase se disponível
    if (typeof window.isFirebaseEnabled === 'function' && window.isFirebaseEnabled()) {
        window.saveToFirebase('tools', newTool).then(() => {
            console.log('✅ Ferramenta salva no Firebase:', newTool.name);
        }).catch(error => {
            console.error('❌ Erro ao salvar no Firebase:', error);
            autoSave(); // Fallback para localStorage
        });
    } else {
        autoSave();
    }
    
    addRecentActivity('tool_added', `Nova ferramenta adicionada: ${newTool.name}`);
    
    // Fechar modal e atualizar interface
    closeModal('add-tool-modal');
    loadDashboard();
    loadToolsTable();
    showNotification('Ferramenta adicionada com sucesso!', 'success');
}

function updateTool() {
    const toolId = parseInt(document.getElementById('edit-tool-id').value);
    const toolIndex = tools.findIndex(t => t.id === toolId);
    
    if (toolIndex === -1) {
        showNotification('Ferramenta não encontrada.', 'error');
        return;
    }
    
    const formData = {
        code: document.getElementById('edit-tool-code').value,
        name: document.getElementById('edit-tool-name').value,
        category: document.getElementById('edit-tool-category').value,
        status: document.getElementById('edit-tool-status').value,
        location: document.getElementById('edit-tool-location').value,
        purchaseDate: document.getElementById('edit-tool-purchase-date').value,
        description: document.getElementById('edit-tool-description').value
    };
    
    // Validação básica
    if (!formData.code || !formData.name || !formData.category || !formData.status || !formData.location) {
        showNotification('Por favor, preencha todos os campos obrigatórios.', 'error');
        return;
    }
    
    // Verificar se o código já existe (exceto para a ferramenta atual)
    if (tools.some(tool => tool.code === formData.code && tool.id !== toolId)) {
        showNotification('Já existe uma ferramenta com este código.', 'error');
        return;
    }
    
    // Atualizar ferramenta
    tools[toolIndex] = {
        ...tools[toolIndex],
        ...formData
    };
    
    // Salvar no localStorage e adicionar atividade
    autoSave();
    addRecentActivity('tool_updated', `Ferramenta atualizada: ${formData.name}`);
    
    // Fechar modal e atualizar interface
    closeModal('edit-tool-modal');
    loadDashboard();
    loadToolsTable();
    showNotification('Ferramenta atualizada com sucesso!', 'success');
}

function addEvent() {
    const formData = {
        title: document.getElementById('event-title').value,
        type: document.getElementById('event-type').value,
        date: document.getElementById('event-date').value,
        time: document.getElementById('event-time').value,
        description: document.getElementById('event-description').value
    };
    
    // Validação básica
    if (!formData.title || !formData.type || !formData.date || !formData.time) {
        showNotification('Por favor, preencha todos os campos obrigatórios.', 'error');
        return;
    }
    
    // Criar novo evento
    const newEvent = {
        id: nextEventId++,
        ...formData,
        status: 'agendado'
    };
    
    events.push(newEvent);
    
    // Salvar no localStorage e adicionar atividade
    autoSave();
    addRecentActivity('event_created', `Novo evento criado: ${formData.title}`);
    
    // Fechar modal e atualizar interface
    closeModal('event-modal');
    loadDashboard();
    loadEventsGrid();
    showNotification('Evento criado com sucesso!', 'success');
}

function addMember() {
    const formData = {
        name: document.getElementById('member-name').value,
        email: document.getElementById('member-email').value,
        phone: document.getElementById('member-phone').value,
        birthdate: document.getElementById('member-birthdate').value,
        ministry: document.getElementById('member-ministry').value,
        status: document.getElementById('member-status').value
    };
    
    // Validação básica
    if (!formData.name || !formData.email || !formData.status) {
        showNotification('Por favor, preencha todos os campos obrigatórios.', 'error');
        return;
    }
    
    // Verificar se o email já existe
    if (members.some(member => member.email === formData.email)) {
        showNotification('Já existe um membro com este email.', 'error');
        return;
    }
    
    // Criar novo membro
    const newMember = {
        id: nextMemberId++,
        ...formData,
        joinDate: new Date().toISOString().split('T')[0]
    };
    
    members.push(newMember);
    
    // Salvar no localStorage e adicionar atividade
    autoSave();
    addRecentActivity('member_joined', `Novo membro: ${formData.name}`);
    
    // Fechar modal e atualizar interface
    closeModal('member-modal');
    loadDashboard();
    loadMembersGrid();
    showNotification('Membro adicionado com sucesso!', 'success');
}

function addToolRequest() {
    const formData = {
        requester: document.getElementById('request-requester').value,
        ministry: document.getElementById('request-ministry').value,
        toolName: document.getElementById('request-tool-name').value,
        category: document.getElementById('request-category').value,
        priority: document.getElementById('request-priority').value,
        needDate: document.getElementById('request-need-date').value,
        phone: document.getElementById('request-phone').value,
        email: document.getElementById('request-email').value,
        reason: document.getElementById('request-reason').value,
        observations: document.getElementById('request-observations').value
    };
    
    // Validação básica
    if (!formData.requester || !formData.ministry || !formData.toolName || !formData.category || !formData.priority || !formData.needDate || !formData.reason) {
        showNotification('Por favor, preencha todos os campos obrigatórios.', 'error');
        return;
    }
    
    // Criar nova solicitação
    const now = new Date();
    const newRequest = {
        id: nextRequestId++,
        ...formData,
        status: 'pendente',
        requestDate: now.toISOString().split('T')[0],
        requestTime: now.toTimeString().substring(0, 5)
    };
    
    toolRequests.push(newRequest);
    
    // Salvar no localStorage e adicionar atividade
    autoSave();
    addRecentActivity('tool_requested', `Nova solicitação: ${formData.toolName} por ${formData.requester}`);
    
    // Fechar modal e atualizar interface
    closeModal('tool-request-modal');
    loadDashboard();
    showNotification('Solicitação enviada com sucesso!', 'success');
    
    // Limpar formulário
    document.getElementById('tool-request-form').reset();
}

function addActivity(type, description) {
    const activity = {
        id: Date.now(),
        type: type,
        description: description,
        timestamp: new Date().toISOString().replace('T', ' ').substring(0, 19)
    };
    
    recentActivities.unshift(activity);
    
    // Manter apenas as 10 atividades mais recentes
    if (recentActivities.length > 10) {
        recentActivities = recentActivities.slice(0, 10);
    }
}

function editTool(toolId) {
    showEditToolModal(toolId);
}

function deleteTool(toolId) {
    const tool = tools.find(t => t.id === toolId);
    if (!tool) return;
    
    showConfirmationModal(
        `Tem certeza que deseja excluir a ferramenta "${tool.name}"?`,
        async () => {
            // Remover do Firebase primeiro
            if (typeof window.isFirebaseEnabled === 'function' && window.isFirebaseEnabled()) {
                await window.deleteFromFirebase('tools', toolId);
            }
            
            // Remover do array local
            const index = tools.findIndex(t => t.id === toolId);
            if (index > -1) {
                tools.splice(index, 1);
            }
            
            if (typeof window.isFirebaseEnabled !== 'function' || !window.isFirebaseEnabled()) {
                autoSave();
            }
            
            addRecentActivity('tool_deleted', `Ferramenta excluída: ${tool.name}`);
            loadDashboard();
            loadToolsTable();
            showNotification('Ferramenta excluída com sucesso!', 'success');
        }
    );
}

function viewToolRequest(requestId) {
    const request = toolRequests.find(r => r.id === requestId);
    if (!request) return;
    
    // Criar modal de visualização
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.display = 'block';
    
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3><i class="fas fa-eye"></i> Detalhes da Solicitação</h3>
                <span class="close" onclick="this.parentElement.parentElement.parentElement.remove()">&times;</span>
            </div>
            <div class="modal-body">
                <div class="request-details">
                    <div class="detail-row">
                        <strong>Solicitante:</strong> ${request.requester}
                    </div>
                    <div class="detail-row">
                        <strong>Ministério:</strong> ${getMinistryLabel(request.ministry)}
                    </div>
                    <div class="detail-row">
                        <strong>Ferramenta:</strong> ${request.toolName}
                    </div>
                    <div class="detail-row">
                        <strong>Categoria:</strong> ${getCategoryText(request.category)}
                    </div>
                    <div class="detail-row">
                        <strong>Prioridade:</strong> 
                        <span class="priority-badge ${getPriorityClass(request.priority)}">
                            ${getPriorityLabel(request.priority)}
                        </span>
                    </div>
                    <div class="detail-row">
                        <strong>Data Necessária:</strong> ${formatDate(request.needDate)}
                    </div>
                    <div class="detail-row">
                        <strong>Status:</strong> 
                        <span class="status-badge ${getRequestStatusClass(request.status)}">
                            ${getRequestStatusLabel(request.status)}
                        </span>
                    </div>
                    <div class="detail-row">
                        <strong>Telefone:</strong> ${request.phone || 'Não informado'}
                    </div>
                    <div class="detail-row">
                        <strong>E-mail:</strong> ${request.email || 'Não informado'}
                    </div>
                    <div class="detail-row">
                        <strong>Motivo:</strong> ${request.reason}
                    </div>
                    <div class="detail-row">
                        <strong>Observações:</strong> ${request.observations || 'Nenhuma'}
                    </div>
                    <div class="detail-row">
                        <strong>Data da Solicitação:</strong> ${formatDate(request.requestDate)} às ${request.requestTime}
                    </div>
                </div>
            </div>
            <div class="modal-actions">
                <button type="button" class="btn-secondary" onclick="this.parentElement.parentElement.parentElement.remove()">Fechar</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
}

function editToolRequest(requestId) {
    const request = toolRequests.find(r => r.id === requestId);
    if (!request) return;
    
    // Por enquanto, apenas mostra uma notificação
    // Em uma implementação completa, seria criado um modal de edição
    showNotification('Funcionalidade de edição será implementada em breve!', 'info');
}

function deleteToolRequest(requestId) {
    const request = toolRequests.find(r => r.id === requestId);
    if (!request) return;
    
    showConfirmationModal(
        `Tem certeza que deseja excluir a solicitação de "${request.toolName}" por ${request.requester}?`,
        () => {
            toolRequests = toolRequests.filter(r => r.id !== requestId);
            autoSave();
            addRecentActivity('request_deleted', `Solicitação excluída: ${request.toolName}`);
            loadToolRequestsTable();
            showNotification('Solicitação excluída com sucesso!', 'success');
        }
    );
}

// Modal de confirmação
function showConfirmationModal(message, onConfirm) {
    const modal = document.getElementById('confirmation-modal');
    const messageElement = document.getElementById('confirmation-message');
    const confirmButton = document.getElementById('confirm-action');
    
    messageElement.textContent = message;
    
    // Remover listeners anteriores
    const newConfirmButton = confirmButton.cloneNode(true);
    confirmButton.parentNode.replaceChild(newConfirmButton, confirmButton);
    
    // Adicionar novo listener
    newConfirmButton.addEventListener('click', () => {
        onConfirm();
        closeModal('confirmation-modal');
    });
    
    modal.style.display = 'block';
}

// Notificações
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Remover notificação após 3 segundos
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Busca Avançada
function showSearchModal() {
    const modal = document.getElementById('search-modal');
    modal.style.display = 'block';
    
    // Limpar resultados anteriores
    document.getElementById('search-results').innerHTML = '';
}

function showEventModal() {
    const modal = document.getElementById('event-modal');
    modal.style.display = 'block';
    
    // Limpar formulário
    document.getElementById('event-form').reset();
}

function showMemberModal() {
    const modal = document.getElementById('member-modal');
    modal.style.display = 'block';
    
    // Limpar formulário
    document.getElementById('member-form').reset();
}

function showToolRequestModal() {
    const modal = document.getElementById('tool-request-modal');
    modal.style.display = 'block';
    
    // Limpar formulário
    document.getElementById('tool-request-form').reset();
    
    // Definir data mínima como hoje
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('request-need-date').min = today;
}

function performAdvancedSearch() {
    const searchTerm = document.getElementById('search-term').value.toLowerCase();
    const searchCategory = document.getElementById('search-category').value;
    const searchStatus = document.getElementById('search-status').value;
    const searchLocation = document.getElementById('search-location').value.toLowerCase();
    const searchDate = document.getElementById('search-date').value;
    
    let filteredTools = tools.filter(tool => {
        // Filtro por termo de busca
        if (searchTerm) {
            const searchText = `${tool.code} ${tool.name} ${tool.description || ''}`.toLowerCase();
            if (!searchText.includes(searchTerm)) {
                return false;
            }
        }
        
        // Filtro por categoria
        if (searchCategory && tool.category !== searchCategory) {
            return false;
        }
        
        // Filtro por status
        if (searchStatus && tool.status !== searchStatus) {
            return false;
        }
        
        // Filtro por localização
        if (searchLocation && !tool.location.toLowerCase().includes(searchLocation)) {
            return false;
        }
        
        // Filtro por data de aquisição
        if (searchDate && tool.purchaseDate !== searchDate) {
            return false;
        }
        
        return true;
    });
    
    displaySearchResults(filteredTools);
}

function displaySearchResults(results) {
    const resultsContainer = document.getElementById('search-results');
    resultsContainer.innerHTML = '';
    
    if (results.length === 0) {
        resultsContainer.innerHTML = `
            <div style="text-align: center; padding: 2rem; color: var(--gray-500);">
                Nenhuma ferramenta encontrada com os critérios de busca.
            </div>
        `;
        return;
    }
    
    results.forEach(tool => {
        const resultItem = document.createElement('div');
        resultItem.className = 'search-result-item';
        
        resultItem.innerHTML = `
            <div class="search-result-info">
                <h4>${tool.name} (${tool.code})</h4>
                <p>${getCategoryText(tool.category)} • ${getStatusText(tool.status)} • ${tool.location}</p>
            </div>
            <div class="search-result-actions">
                <button class="btn-icon btn-edit" onclick="editTool(${tool.id})" title="Editar">
                    <i class="fas fa-edit"></i>
                </button>
            </div>
        `;
        
        resultsContainer.appendChild(resultItem);
    });
}

// Agendamento de Manutenção
function setupMaintenanceForm() {
    const maintenanceForm = document.getElementById('maintenance-form');
    if (maintenanceForm) {
        maintenanceForm.addEventListener('submit', function(e) {
            e.preventDefault();
            scheduleMaintenance();
        });
    }
}

function showMaintenanceModal() {
    const modal = document.getElementById('maintenance-modal');
    modal.style.display = 'block';
    
    // Limpar formulário
    document.getElementById('maintenance-form').reset();
    
    // Definir data atual como padrão
    document.getElementById('maintenance-date').value = new Date().toISOString().split('T')[0];
    
    // Preencher select de ferramentas
    populateMaintenanceToolSelect();
}

function populateMaintenanceToolSelect() {
    const toolSelect = document.getElementById('maintenance-tool');
    toolSelect.innerHTML = '<option value="">Selecione uma ferramenta...</option>';
    
    tools.forEach(tool => {
        const option = document.createElement('option');
        option.value = tool.id;
        option.textContent = `${tool.code} - ${tool.name}`;
        toolSelect.appendChild(option);
    });
}

function scheduleMaintenance() {
    const formData = {
        toolId: parseInt(document.getElementById('maintenance-tool').value),
        type: document.getElementById('maintenance-type').value,
        priority: document.getElementById('maintenance-priority').value,
        scheduledDate: document.getElementById('maintenance-date').value,
        scheduledTime: document.getElementById('maintenance-time').value,
        description: document.getElementById('maintenance-description').value,
        technician: document.getElementById('maintenance-technician').value
    };
    
    // Validação
    if (!formData.toolId || !formData.type || !formData.priority || !formData.scheduledDate || !formData.scheduledTime) {
        showNotification('Por favor, preencha todos os campos obrigatórios.', 'error');
        return;
    }
    
    // Encontrar ferramenta
    const tool = tools.find(t => t.id === formData.toolId);
    if (!tool) {
        showNotification('Ferramenta não encontrada.', 'error');
        return;
    }
    
    // Criar agendamento
    const maintenance = {
        id: maintenanceSchedule.length + 1,
        toolId: formData.toolId,
        toolName: tool.name,
        type: formData.type,
        priority: formData.priority,
        scheduledDate: formData.scheduledDate,
        scheduledTime: formData.scheduledTime,
        description: formData.description,
        technician: formData.technician,
        status: 'agendada'
    };
    
    maintenanceSchedule.push(maintenance);
    
    // Atualizar status da ferramenta para manutenção
    tool.status = 'manutencao';
    
    // Fechar modal e atualizar interface
    closeModal('maintenance-modal');
    loadDashboard();
    loadToolsTable();
    showNotification('Manutenção agendada com sucesso!', 'success');
}

// Funções auxiliares para exportação Excel
function exportData() {
    try {
        // Criar planilha com dados das ferramentas
        const worksheet = createToolsWorksheet();
        const csvContent = createCSVContent(worksheet);
        
        // Download direto como CSV (Excel pode abrir)
        downloadCSV(csvContent, `ferramentas-ccb-${new Date().toISOString().split('T')[0]}.csv`);
        showNotification('Dados exportados com sucesso!', 'success');
    } catch (error) {
        console.error('Erro na exportação:', error);
        showNotification('Erro na exportação. Tente novamente.', 'error');
    }
}

// Função para criar planilha de ferramentas
function createToolsWorksheet() {
    const headers = [
        'Código', 'Nome', 'Categoria', 'Status', 'Localização', 
        'Data de Aquisição', 'Última Manutenção', 'Descrição'
    ];
    
    const data = tools.map(tool => [
        tool.code,
        tool.name,
        getCategoryText(tool.category),
        getStatusText(tool.status),
        tool.location,
        formatDate(tool.purchaseDate),
        formatDate(tool.lastMaintenance),
        tool.description || ''
    ]);
    
    return [headers, ...data];
}

// Função para criar planilha de manutenções
function createMaintenanceWorksheet() {
    const headers = [
        'ID', 'Ferramenta', 'Tipo', 'Prioridade', 'Data Agendada', 
        'Horário', 'Descrição', 'Técnico', 'Status'
    ];
    
    const data = maintenanceSchedule.map(maintenance => [
        maintenance.id,
        maintenance.toolName,
        getMaintenanceTypeText(maintenance.type),
        getPriorityText(maintenance.priority),
        formatDate(maintenance.scheduledDate),
        maintenance.scheduledTime,
        maintenance.description || '',
        maintenance.technician || '',
        getMaintenanceStatusText(maintenance.status)
    ]);
    
    return [headers, ...data];
}

// Helpers para exportação CSV
function createCSVContent(worksheet) {
    const rows = worksheet.map(function(row) {
        return row.map(function(cell) {
            const value = String(cell == null ? '' : cell);
            const needsQuotes = value.includes(',') || value.includes('"') || value.includes('\n') || value.includes('\r');
            if (needsQuotes) {
                return '"' + value.replace(/"/g, '""') + '"';
            }
            return value;
        }).join(',');
    });
    // BOM para Excel PT-BR reconhecer acentuação corretamente
    return '\ufeff' + rows.join('\r\n');
}

function downloadCSV(csvContent, filename) {
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}

// Importação de CSV
function triggerImportXlsx() {
    var input = document.getElementById('xlsx-file-input');
    if (!input) return;
    input.value = '';
    input.onchange = function(e) {
        var file = e.target.files && e.target.files[0];
        if (!file) return;
        var reader = new FileReader();
        reader.onload = function(evt) {
            try {
                var data = new Uint8Array(evt.target.result);
                var workbook = XLSX.read(data, { type: 'array' });
                var firstSheet = workbook.SheetNames[0];
                var worksheet = workbook.Sheets[firstSheet];
                var json = XLSX.utils.sheet_to_json(worksheet, { defval: '' });
                // normalizar chaves para lower-case
                var rows = json.map(function(row){
                    var out = {}; Object.keys(row).forEach(function(k){ out[String(k).toLowerCase()] = row[k]; });
                    return out;
                });
                // validar cabeçalhos essenciais
                if (!hasAnyKey(rows, ['código','codigo','code'])) {
                    showNotification('Arquivo inválido: coluna "Código" é obrigatória.', 'error');
                    return;
                }
                var stats = mergeToolsFromCsv(rows);
                loadDashboard();
                loadToolsTable();
                renderImportReport(stats, rows);
            } catch (err) {
                console.error(err);
                showNotification('Falha ao importar XLSX. Verifique o arquivo.', 'error');
            }
        };
        reader.readAsArrayBuffer(file);
    };
    input.click();
}

function parseCsv(text) {
    // suporta BOM
    if (text.charCodeAt(0) === 0xFEFF) {
        text = text.slice(1);
    }
    var lines = text.split(/\r?\n/).filter(function(l){return l.trim().length>0});
    if (lines.length === 0) return [];
    var header = splitCsvLine(lines[0]);
    var data = [];
    for (var i = 1; i < lines.length; i++) {
        var cols = splitCsvLine(lines[i]);
        var row = {};
        for (var c = 0; c < header.length; c++) {
            row[header[c].trim().toLowerCase()] = (cols[c] || '').trim();
        }
        data.push(row);
    }
    return data;
}

function splitCsvLine(line) {
    var result = [];
    var current = '';
    var inQuotes = false;
    for (var i = 0; i < line.length; i++) {
        var ch = line[i];
        if (inQuotes) {
            if (ch === '"') {
                if (line[i+1] === '"') { current += '"'; i++; } else { inQuotes = false; }
            } else { current += ch; }
        } else {
            if (ch === '"') { inQuotes = true; }
            else if (ch === ',') { result.push(current); current = ''; }
            else { current += ch; }
        }
    }
    result.push(current);
    return result;
}

function mergeToolsFromCsv(rows) {
    // Mapeia possíveis cabeçalhos para nossos campos
    function pick(obj, keys) {
        for (var k = 0; k < keys.length; k++) {
            var key = keys[k];
            if (obj[key] != null && obj[key] !== '') return obj[key];
        }
        return '';
    }
    var codeKeys = ['código','codigo','code'];
    var nameKeys = ['nome','name'];
    var categoryKeys = ['categoria','category'];
    var statusKeys = ['status'];
    var locationKeys = ['localização','localizacao','location'];
    var purchaseKeys = ['data de aquisição','data de aquisicao','purchase date'];
    var lastMaintKeys = ['última manutenção','ultima manutencao','last maintenance'];
    var descKeys = ['descrição','descricao','description'];

    var existingByCode = {};
    tools.forEach(function(t){ existingByCode[String(t.code).toLowerCase()] = t; });

    var stats = { created: 0, updated: 0, skipped: 0, errors: [] };
    rows.forEach(function(r, idx){
        var code = pick(r, codeKeys).trim();
        if (!code) { stats.skipped++; stats.errors.push({ row: idx+2, error: 'Código ausente' }); return; }
        var tool = existingByCode[code.toLowerCase()];
        var mapped = {
            code: code,
            name: pick(r, nameKeys) || '',
            category: normalizeCategory(pick(r, categoryKeys)),
            status: normalizeStatus(pick(r, statusKeys)),
            location: pick(r, locationKeys) || '',
            purchaseDate: normalizeDate(pick(r, purchaseKeys)) || '',
            lastMaintenance: normalizeDate(pick(r, lastMaintKeys)) || '',
            description: pick(r, descKeys) || ''
        };
        if (tool) {
            // merge update
            Object.assign(tool, mapped);
            stats.updated++;
        } else {
            mapped.id = tools.length ? Math.max.apply(null, tools.map(function(t){return t.id||0;})) + 1 : 1;
            tools.push(mapped);
            stats.created++;
        }
    });
    return stats;
}

function hasAnyKey(rows, keys) {
    if (!rows || !rows.length) return false;
    var row0 = rows[0];
    for (var i = 0; i < keys.length; i++) {
        if (Object.prototype.hasOwnProperty.call(row0, keys[i])) return true;
    }
    return false;
}

// Relatório de importação
function renderImportReport(stats, rows) {
    var summary = document.getElementById('import-report-summary');
    if (!summary) {
        // fallback: notificação somente
        showNotification(`Importação: ${stats.created} adicionadas, ${stats.updated} atualizadas, ${stats.skipped} puladas`, 'success');
        return;
    }
    var html = '';
    html += `<p><strong>Adicionadas:</strong> ${stats.created}</p>`;
    html += `<p><strong>Atualizadas:</strong> ${stats.updated}</p>`;
    html += `<p><strong>Puladas:</strong> ${stats.skipped}</p>`;
    summary.innerHTML = html;

    var hasErrors = stats.errors && stats.errors.length > 0;
    var errorsWrap = document.getElementById('import-report-errors');
    var errorsBody = document.getElementById('import-report-errors-body');
    var btnCsv = document.getElementById('btn-download-import-errors');
    if (hasErrors && errorsWrap && errorsBody) {
        errorsBody.innerHTML = '';
        stats.errors.forEach(function(e){
            var code = '';
            if (rows && rows[e.row-2]) {
                var r = rows[e.row-2];
                code = (r['código'] || r['codigo'] || r['code'] || '').toString();
            }
            var tr = document.createElement('tr');
            tr.innerHTML = `<td>${e.row}</td><td>${escapeHtml(code)}</td><td>${escapeHtml(e.error)}</td>`;
            errorsBody.appendChild(tr);
        });
        errorsWrap.style.display = '';
        if (btnCsv) btnCsv.style.display = '';
    } else {
        if (errorsWrap) errorsWrap.style.display = 'none';
        if (btnCsv) btnCsv.style.display = 'none';
    }
    openModal('import-report-modal');
}

function downloadImportErrorsCSV() {
    if (!window._lastImportStats || !window._lastImportStats.errors) return;
    var rows = [['Linha','Código','Erro']];
    window._lastImportStats.errors.forEach(function(e){
        rows.push([e.row, e.code || '', e.error]);
    });
    var csv = rows.map(function(r){
        return r.map(function(c){
            var v = String(c == null ? '' : c);
            return '"' + v.replace(/"/g, '""') + '"';
        }).join(',');
    }).join('\r\n');
    downloadCSV('\ufeff' + csv, 'erros-importacao.csv');
}

function escapeHtml(s) {
    return String(s || '').replace(/[&<>"]/g, function(ch){
        return ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[ch]);
    });
}

// Pequena infra de modais (reuso)
function openModal(id) { var m = document.getElementById(id); if (m) m.style.display = 'block'; }
function closeModal(id) { var m = document.getElementById(id); if (m) m.style.display = 'none'; }

// Template XLSX para download
function downloadXlsxTemplate() {
    var headers = [
        ['Código','Nome','Categoria','Status','Localização','Data de Aquisição','Última Manutenção','Descrição']
    ];
    var ws = XLSX.utils.aoa_to_sheet(headers);
    // Larguras de coluna
    ws['!cols'] = [
        { wch: 10 },{ wch: 28 },{ wch: 14 },{ wch: 14 },{ wch: 18 },{ wch: 18 },{ wch: 18 },{ wch: 30 }
    ];
    var wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Modelo');
    var wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    var blob = new Blob([wbout], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = 'modelo-importacao-ccb.xlsx';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

function normalizeCategory(value) {
    var v = (value || '').toLowerCase();
    if (v.startsWith('el')) return 'eletrica';
    if (v.startsWith('man')) return 'manual';
    if (v.startsWith('hid')) return 'hidraulica';
    if (v.startsWith('pne')) return 'pneumatica';
    if (v.startsWith('aud')) return 'audio';
    if (v.startsWith('vid')) return 'video';
    if (v.startsWith('ill')) return 'iluminacao';
    return v || '';
}

function normalizeStatus(value) {
    var v = (value || '').toLowerCase();
    if (v.includes('dispon')) return 'disponivel';
    if (v.includes('uso')) return 'em-uso';
    if (v.includes('manut')) return 'manutencao';
    if (v.includes('inativ')) return 'inativo';
    return v || '';
}

function normalizeDate(value) {
    var v = (value || '').trim();
    if (!v) return '';
    // tenta formatos DD/MM/AAAA e AAAA-MM-DD
    var dm = v.match(/^([0-3]?\d)[\/\-]([01]?\d)[\/\-](\d{4})$/);
    if (dm) {
        var d = dm[1].padStart(2,'0');
        var m = dm[2].padStart(2,'0');
        var y = dm[3];
        return y + '-' + m + '-' + d;
    }
    var iso = v.match(/^(\d{4})[\-]([01]?\d)[\-]([0-3]?\d)$/);
    if (iso) {
        var m2 = iso[2].padStart(2,'0');
        var d2 = iso[3].padStart(2,'0');
        return iso[1] + '-' + m2 + '-' + d2;
    }
    return v;
}

// Função para criar workbook Excel
function createWorkbook(name, worksheet) {
    // Simular criação de arquivo Excel (em produção, usar biblioteca como SheetJS)
    const csvContent = worksheet.map(row => 
        row.map(cell => `"${cell}"`).join(',')
    ).join('\n');
    
    return {
        name: name,
        data: csvContent,
        type: 'text/csv;charset=utf-8;'
    };
}

// Função para download de arquivo Excel
function downloadExcel(workbook, filename) {
    const blob = new Blob([workbook.data], { type: workbook.type });
    const url = URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.click();
    
    URL.revokeObjectURL(url);
}

// Funções auxiliares para textos
function getMaintenanceTypeText(type) {
    const typeMap = {
        'preventiva': 'Preventiva',
        'corretiva': 'Corretiva',
        'calibracao': 'Calibração',
        'limpeza': 'Limpeza'
    };
    return typeMap[type] || type;
}

function getPriorityText(priority) {
    const priorityMap = {
        'baixa': 'Baixa',
        'media': 'Média',
        'alta': 'Alta',
        'urgente': 'Urgente'
    };
    return priorityMap[priority] || priority;
}

function getMaintenanceStatusText(status) {
    const statusMap = {
        'agendada': 'Agendada',
        'em-andamento': 'Em Andamento',
        'concluida': 'Concluída',
        'cancelada': 'Cancelada'
    };
    return statusMap[status] || status;
}

// Funções de relatórios
function generateUsageReport() {
    try {
        const usageData = tools.map(tool => ({
            codigo: tool.code,
            nome: tool.name,
            categoria: getCategoryText(tool.category),
            status: getStatusText(tool.status),
            localizacao: tool.location,
            ultimaManutencao: formatDate(tool.lastMaintenance),
            diasSemManutencao: calculateDaysSinceLastMaintenance(tool.lastMaintenance)
        }));
        
        const worksheet = [
            ['Código', 'Nome', 'Categoria', 'Status', 'Localização', 'Última Manutenção', 'Dias sem Manutenção'],
            ...usageData.map(item => [
                item.codigo, item.nome, item.categoria, item.status, 
                item.localizacao, item.ultimaManutencao, item.diasSemManutencao
            ])
        ];
        
        const csvContent = createCSVContent(worksheet);
        downloadCSV(csvContent, `relatorio-uso-ccb-${new Date().toISOString().split('T')[0]}.csv`);
        showNotification('Relatório de uso gerado com sucesso!', 'success');
    } catch (error) {
        console.error('Erro ao gerar relatório:', error);
        showNotification('Erro ao gerar relatório. Tente novamente.', 'error');
    }
}

function generateMaintenanceReport() {
    try {
        const maintenanceData = maintenanceSchedule.map(maintenance => ({
            id: maintenance.id,
            ferramenta: maintenance.toolName,
            tipo: getMaintenanceTypeText(maintenance.type),
            prioridade: getPriorityText(maintenance.priority),
            dataAgendada: formatDate(maintenance.scheduledDate),
            horario: maintenance.scheduledTime,
            tecnico: maintenance.technician || 'Não definido',
            status: getMaintenanceStatusText(maintenance.status),
            descricao: maintenance.description || ''
        }));
        
        const worksheet = [
            ['ID', 'Ferramenta', 'Tipo', 'Prioridade', 'Data Agendada', 'Horário', 'Técnico', 'Status', 'Descrição'],
            ...maintenanceData.map(item => [
                item.id, item.ferramenta, item.tipo, item.prioridade,
                item.dataAgendada, item.horario, item.tecnico, item.status, item.descricao
            ])
        ];
        
        const csvContent = createCSVContent(worksheet);
        downloadCSV(csvContent, `relatorio-manutencao-ccb-${new Date().toISOString().split('T')[0]}.csv`);
        showNotification('Relatório de manutenção gerado com sucesso!', 'success');
    } catch (error) {
        console.error('Erro ao gerar relatório:', error);
        showNotification('Erro ao gerar relatório. Tente novamente.', 'error');
    }
}

function generateInventoryReport() {
    try {
        const inventoryData = tools.map(tool => ({
            codigo: tool.code,
            nome: tool.name,
            categoria: getCategoryText(tool.category),
            status: getStatusText(tool.status),
            localizacao: tool.location,
            dataAquisicao: formatDate(tool.purchaseDate),
            ultimaManutencao: formatDate(tool.lastMaintenance),
            descricao: tool.description || ''
        }));
        
        const worksheet = [
            ['Código', 'Nome', 'Categoria', 'Status', 'Localização', 'Data de Aquisição', 'Última Manutenção', 'Descrição'],
            ...inventoryData.map(item => [
                item.codigo, item.nome, item.categoria, item.status,
                item.localizacao, item.dataAquisicao, item.ultimaManutencao, item.descricao
            ])
        ];
        
        const csvContent = createCSVContent(worksheet);
        downloadCSV(csvContent, `relatorio-inventario-ccb-${new Date().toISOString().split('T')[0]}.csv`);
        showNotification('Relatório de inventário gerado com sucesso!', 'success');
    } catch (error) {
        console.error('Erro ao gerar relatório:', error);
        showNotification('Erro ao gerar relatório. Tente novamente.', 'error');
    }
}

function generateMembersReport() {
    try {
        const membersData = members.map(member => ({
            nome: member.name,
            email: member.email,
            telefone: member.phone || 'Não informado',
            nascimento: formatDate(member.birthdate) || 'Não informado',
            ministerio: getMinistryLabel(member.ministry) || 'Não definido',
            status: getStatusLabel(member.status),
            dataIngresso: formatDate(member.joinDate)
        }));
        
        const worksheet = [
            ['Nome', 'E-mail', 'Telefone', 'Data de Nascimento', 'Ministério', 'Status', 'Data de Ingresso'],
            ...membersData.map(item => [
                item.nome, item.email, item.telefone, item.nascimento,
                item.ministerio, item.status, item.dataIngresso
            ])
        ];
        
        const csvContent = createCSVContent(worksheet);
        downloadCSV(csvContent, `relatorio-membros-ccb-${new Date().toISOString().split('T')[0]}.csv`);
        showNotification('Relatório de membros gerado com sucesso!', 'success');
    } catch (error) {
        console.error('Erro ao gerar relatório:', error);
        showNotification('Erro ao gerar relatório. Tente novamente.', 'error');
    }
}

function calculateDaysSinceLastMaintenance(lastMaintenanceDate) {
    if (!lastMaintenanceDate) return 'N/A';
    
    const today = new Date();
    const lastMaintenance = new Date(lastMaintenanceDate);
    const diffTime = Math.abs(today - lastMaintenance);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    return diffDays;
}

function getPriorityText(priority) {
    const priorityMap = {
        'baixa': 'Baixa',
        'media': 'Média',
        'alta': 'Alta',
        'urgente': 'Urgente'
    };
    return priorityMap[priority] || priority;
}

function getMaintenanceStatusText(status) {
    const statusMap = {
        'agendada': 'Agendada',
        'em-andamento': 'Em Andamento',
        'concluida': 'Concluída',
        'cancelada': 'Cancelada'
    };
    return statusMap[status] || status;
}

// Relatórios
function generateUsageReport() {
    const report = {
        title: 'Relatório de Uso de Ferramentas',
        date: new Date().toLocaleDateString('pt-BR'),
        total: tools.length,
        byStatus: {
            disponivel: tools.filter(t => t.status === 'disponivel').length,
            'em-uso': tools.filter(t => t.status === 'em-uso').length,
            manutencao: tools.filter(t => t.status === 'manutencao').length,
            inativo: tools.filter(t => t.status === 'inativo').length
        },
        byCategory: {
            eletrica: tools.filter(t => t.category === 'eletrica').length,
            manual: tools.filter(t => t.category === 'manual').length,
            hidraulica: tools.filter(t => t.category === 'hidraulica').length,
            pneumatica: tools.filter(t => t.category === 'pneumatica').length,
            audio: tools.filter(t => t.category === 'audio').length,
            video: tools.filter(t => t.category === 'video').length,
            iluminacao: tools.filter(t => t.category === 'iluminacao').length
        }
    };
    
    // Criar planilha do relatório
    const worksheet = createUsageReportWorksheet(report);
    const csvContent = createCSVContent(worksheet);
    downloadCSV(csvContent, `relatorio-uso-${new Date().toISOString().split('T')[0]}.csv`);
    showNotification('Relatório de uso exportado com sucesso!', 'success');
}

function createUsageReportWorksheet(report) {
    const worksheet = [
        ['RELATÓRIO DE USO DE FERRAMENTAS - CCB'],
        [''],
        ['Data:', report.date],
        ['Total de Ferramentas:', report.total],
        [''],
        ['Distribuição por Status:'],
        ['Status', 'Quantidade'],
        ['Disponível', report.byStatus.disponivel],
        ['Em Uso', report.byStatus['em-uso']],
        ['Em Manutenção', report.byStatus.manutencao],
        ['Inativo', report.byStatus.inativo],
        [''],
        ['Distribuição por Categoria:'],
        ['Categoria', 'Quantidade'],
        ['Elétrica', report.byCategory.eletrica],
        ['Manual', report.byCategory.manual],
        ['Hidráulica', report.byCategory.hidraulica],
        ['Pneumática', report.byCategory.pneumatica],
        ['Áudio', report.byCategory.audio],
        ['Vídeo', report.byCategory.video],
        ['Iluminação', report.byCategory.iluminacao]
    ];
    
    return worksheet;
}

function generateMaintenanceReport() {
    const maintenanceTools = tools.filter(t => t.status === 'manutencao');
    const report = {
        title: 'Relatório de Manutenção',
        date: new Date().toLocaleDateString('pt-BR'),
        totalMaintenance: maintenanceTools.length,
        tools: maintenanceTools.map(t => ({
            code: t.code,
            name: t.name,
            lastMaintenance: t.lastMaintenance
        })),
        scheduledMaintenance: maintenanceSchedule
    };
    
    // Criar planilha do relatório
    const worksheet = createMaintenanceReportWorksheet(report);
    const csvContent = createCSVContent(worksheet);
    downloadCSV(csvContent, `relatorio-manutencao-${new Date().toISOString().split('T')[0]}.csv`);
    showNotification('Relatório de manutenção exportado com sucesso!', 'success');
}

function createMaintenanceReportWorksheet(report) {
    const worksheet = [
        ['RELATÓRIO DE MANUTENÇÃO - CCB'],
        [''],
        ['Data:', report.date],
        ['Total em Manutenção:', report.totalMaintenance],
        [''],
        ['Ferramentas em Manutenção:'],
        ['Código', 'Nome', 'Última Manutenção'],
        ...report.tools.map(t => [t.code, t.name, formatDate(t.lastMaintenance)]),
        [''],
        ['Manutenções Agendadas:'],
        ['ID', 'Ferramenta', 'Tipo', 'Prioridade', 'Data', 'Horário', 'Técnico'],
        ...report.scheduledMaintenance.map(m => [
            m.id, m.toolName, getMaintenanceTypeText(m.type), 
            getPriorityText(m.priority), formatDate(m.scheduledDate), 
            m.scheduledTime, m.technician || ''
        ])
    ];
    
    return worksheet;
}

function generateInventoryReport() {
    const report = {
        title: 'Relatório de Inventário',
        date: new Date().toLocaleDateString('pt-BR'),
        total: tools.length,
        tools: tools.map(t => ({
            code: t.code,
            name: t.name,
            category: getCategoryText(t.category),
            status: getStatusText(t.status),
            location: t.location,
            purchaseDate: formatDate(t.purchaseDate),
            lastMaintenance: formatDate(t.lastMaintenance)
        }))
    };
    
    // Criar planilha do relatório
    const worksheet = createInventoryReportWorksheet(report);
    const csvContent = createCSVContent(worksheet);
    downloadCSV(csvContent, `relatorio-inventario-${new Date().toISOString().split('T')[0]}.csv`);
    showNotification('Relatório de inventário exportado com sucesso!', 'success');
}

function generateMembersReport() {
    const report = {
        title: 'Relatório de Membros',
        date: new Date().toLocaleDateString('pt-BR'),
        total: members.length,
        members: members.map(m => ({
            name: m.name,
            email: m.email,
            phone: m.phone,
            ministry: getMinistryLabel(m.ministry),
            status: getStatusLabel(m.status),
            birthdate: formatDate(m.birthdate),
            joinDate: formatDate(m.joinDate)
        }))
    };
    
    // Criar planilha do relatório
    const worksheet = createMembersReportWorksheet(report);
    const csvContent = createCSVContent(worksheet);
    downloadCSV(csvContent, `relatorio-membros-${new Date().toISOString().split('T')[0]}.csv`);
    showNotification('Relatório de membros exportado com sucesso!', 'success');
}

function createMembersReportWorksheet(report) {
    const worksheet = [
        ['RELATÓRIO DE MEMBROS - CCB'],
        [''],
        ['Data:', report.date],
        ['Total de Membros:', report.total],
        [''],
        ['Detalhamento dos Membros:'],
        ['Nome', 'Email', 'Telefone', 'Ministério', 'Status', 'Data de Nascimento', 'Data de Entrada'],
        ...report.members.map(m => [
            m.name, m.email, m.phone, m.ministry, m.status, 
            m.birthdate, m.joinDate
        ])
    ];
    
    return worksheet;
}

function createInventoryReportWorksheet(report) {
    const worksheet = [
        ['RELATÓRIO DE INVENTÁRIO - CCB'],
        [''],
        ['Data:', report.date],
        ['Total de Ferramentas:', report.total],
        [''],
        ['Detalhamento das Ferramentas:'],
        ['Código', 'Nome', 'Categoria', 'Status', 'Localização', 'Data de Aquisição', 'Última Manutenção'],
        ...report.tools.map(t => [
            t.code, t.name, t.category, t.status, t.location, 
            t.purchaseDate, t.lastMaintenance
        ])
    ];
    
    return worksheet;
}

// Configurações
document.addEventListener('DOMContentLoaded', function() {
    const settingsForm = document.querySelector('.settings-form');
    if (settingsForm) {
        settingsForm.addEventListener('submit', function(e) {
            e.preventDefault();
            showNotification('Configurações salvas com sucesso!', 'success');
        });
    }
});

// Atalhos de teclado
document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + N para nova ferramenta
    if ((e.ctrlKey || e.metaKey) && e.key === 'n') {
        e.preventDefault();
        showAddToolModal();
    }
    
    // Ctrl/Cmd + F para buscar
    if ((e.ctrlKey || e.metaKey) && e.key === 'f') {
        e.preventDefault();
        document.getElementById('search-input')?.focus();
    }
    
    // ESC para fechar modais
    if (e.key === 'Escape') {
        const modals = document.querySelectorAll('.modal');
        modals.forEach(modal => {
            if (modal.style.display === 'block') {
                modal.style.display = 'none';
            }
        });
    }
});

// Persistência de dados (localStorage)
function saveToLocalStorage() {
    localStorage.setItem('ccb-tools', JSON.stringify(tools));
    localStorage.setItem('ccb-maintenance', JSON.stringify(maintenanceSchedule));
    localStorage.setItem('ccb-next-id', nextId.toString());
    localStorage.setItem('ccb-events', JSON.stringify(events));
    localStorage.setItem('ccb-members', JSON.stringify(members));
    localStorage.setItem('ccb-recent-activities', JSON.stringify(recentActivities));
    localStorage.setItem('ccb-tool-requests', JSON.stringify(toolRequests));
    localStorage.setItem('ccb-next-request-id', nextRequestId.toString());
}

function loadFromLocalStorage() {
    const savedTools = localStorage.getItem('ccb-tools');
    const savedMaintenance = localStorage.getItem('ccb-maintenance');
    const savedNextId = localStorage.getItem('ccb-next-id');
    const savedEvents = localStorage.getItem('ccb-events');
    const savedMembers = localStorage.getItem('ccb-members');
    const savedRecentActivities = localStorage.getItem('ccb-recent-activities');
    const savedToolRequests = localStorage.getItem('ccb-tool-requests');
    const savedNextRequestId = localStorage.getItem('ccb-next-request-id');
    
    if (savedTools) {
        tools = JSON.parse(savedTools);
    }
    
    if (savedMaintenance) {
        maintenanceSchedule = JSON.parse(savedMaintenance);
    }
    
    if (savedNextId) {
        nextId = parseInt(savedNextId);
    }

    if (savedEvents) {
        events = JSON.parse(savedEvents);
    }

    if (savedMembers) {
        members = JSON.parse(savedMembers);
    }

    if (savedRecentActivities) {
        recentActivities = JSON.parse(savedRecentActivities);
    }
    
    if (savedToolRequests) {
        toolRequests = JSON.parse(savedToolRequests);
    }
    
    if (savedNextRequestId) {
        nextRequestId = parseInt(savedNextRequestId);
    }
}

// Salvar dados automaticamente
function autoSave() {
    saveToLocalStorage();
}

// Carregar dados salvos na inicialização
loadFromLocalStorage();

// Salvar dados quando houver mudanças
const originalPush = Array.prototype.push;
Array.prototype.push = function(...args) {
    const result = originalPush.apply(this, args);
    if (this === tools || this === maintenanceSchedule || this === events || this === members || this === recentActivities || this === toolRequests) {
        autoSave();
    }
    return result;
};

// Interceptar mudanças nas arrays
const toolsProxy = new Proxy(tools, {
    set: function(target, property, value) {
        target[property] = value;
        autoSave();
        return true;
    }
});

const maintenanceProxy = new Proxy(maintenanceSchedule, {
    set: function(target, property, value) {
        target[property] = value;
        autoSave();
        return true;
    }
});

const eventsProxy = new Proxy(events, {
    set: function(target, property, value) {
        target[property] = value;
        autoSave();
        return true;
    }
});

const membersProxy = new Proxy(members, {
    set: function(target, property, value) {
        target[property] = value;
        autoSave();
        return true;
    }
});

const recentActivitiesProxy = new Proxy(recentActivities, {
    set: function(target, property, value) {
        target[property] = value;
        autoSave();
        return true;
    }
});

const toolRequestsProxy = new Proxy(toolRequests, {
    set: function(target, property, value) {
        target[property] = value;
        autoSave();
        return true;
    }
});

// Substituir as arrays originais pelos proxies
tools = toolsProxy;
maintenanceSchedule = maintenanceProxy;
events = eventsProxy;
members = membersProxy;
recentActivities = recentActivitiesProxy;
toolRequests = toolRequestsProxy;

// Funções de gerenciamento de dados
function exportData() {
    backupData();
}

function importData() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.onchange = function(e) {
        const file = e.target.files[0];
        if (file) {
            restoreData(file);
        }
    };
    input.click();
}

function clearAllData() {
    resetAllData();
}

// Função para verificar status do Firebase
function checkFirebaseStatus() {
    const status = getConnectionStatus();
    
    let message = '🔍 **Status da Conexão:**\n\n';
    message += `• Firebase: ${status.firebase ? '✅ Conectado' : '❌ Desconectado'}\n`;
    message += `• localStorage: ${status.localStorage ? '✅ Disponível' : '❌ Indisponível'}\n`;
    message += `• Internet: ${status.online ? '✅ Online' : '❌ Offline'}\n\n`;
    
    if (status.firebase) {
        message += '🔄 **Sincronização ativa** - Dados são salvos no Firebase em tempo real';
    } else {
        message += '💾 **Modo local** - Dados salvos apenas no localStorage';
    }
    
    alert(message);
    console.log('Status Firebase:', status);
}

// Função para migrar dados locais para Firebase
async function migrateLocalDataToFirebase() {
    if (typeof window.isFirebaseEnabled !== 'function' || !window.isFirebaseEnabled()) {
        console.log('Firebase não está habilitado - pulando migração');
        return;
    }
    
    console.log('Iniciando migração de dados para Firebase...');
    
    try {
        // Migrar ferramentas
        for (const tool of tools) {
            await window.saveToFirebase('tools', tool);
        }
        
        // Migrar eventos
        for (const event of events) {
            await window.saveToFirebase('events', event);
        }
        
        // Migrar membros
        for (const member of members) {
            await window.saveToFirebase('members', member);
        }
        
        // Migrar solicitações
        for (const request of toolRequests) {
            await window.saveToFirebase('toolRequests', request);
        }
        
        console.log('Migração concluída com sucesso!');
        showNotification('Dados migrados para Firebase com sucesso!', 'success');
    } catch (error) {
        console.error('Erro durante migração:', error);
        showNotification('Erro ao migrar dados para Firebase', 'error');
    }
}
