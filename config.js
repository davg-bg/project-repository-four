// Configurações do Sistema CCB - Gerenciamento de Ferramentas
const CCB_CONFIG = {
    // Informações da Empresa
    company: {
        name: "CCB - Congregação Cristã do Brasil",
        shortName: "CCB",
        logo: "fas fa-church", // Ícone de igreja sem cruz
        primaryColor: "#1e40af", // Azul padrão CCB
        secondaryColor: "#6b7280" // Cinza padrão CCB
    },

    // Configurações do Sistema
    system: {
        title: "CCB Ferramentas",
        version: "1.0.0",
        language: "pt-BR",
        timezone: "America/Sao_Paulo",
        dateFormat: "dd/MM/yyyy",
        timeFormat: "HH:mm"
    },

    // Categorias de Ferramentas
    categories: {
        eletrica: {
            name: "Elétrica",
            icon: "fas fa-bolt",
            color: "#3b82f6"
        },
        manual: {
            name: "Manual",
            icon: "fas fa-wrench",
            color: "#6b7280"
        },
        hidraulica: {
            name: "Hidráulica",
            icon: "fas fa-tint",
            color: "#0ea5e9"
        },
        pneumatica: {
            name: "Pneumática",
            icon: "fas fa-wind",
            color: "#8b5cf6"
        }
    },

    // Status das Ferramentas
    status: {
        disponivel: {
            name: "Disponível",
            icon: "fas fa-check-circle",
            color: "#10b981",
            bgColor: "#dcfce7"
        },
        "em-uso": {
            name: "Em Uso",
            icon: "fas fa-clock",
            color: "#f59e0b",
            bgColor: "#fef3c7"
        },
        manutencao: {
            name: "Em Manutenção",
            icon: "fas fa-tools",
            color: "#ef4444",
            bgColor: "#fee2e2"
        },
        inativo: {
            name: "Inativo",
            icon: "fas fa-ban",
            color: "#6b7280",
            bgColor: "#f3f4f6"
        }
    },

    // Configurações de Localização (inclui algumas igrejas CCB)
    locations: [
        "Almoxarifado A",
        "Almoxarifado B",
        "Obra Norte",
        "Obra Sul",
        "Oficina Central",
        "Pátio de Máquinas",
        "Depósito Principal",
        "Sala de Ferramentas",
        // Igrejas CCB (base inicial)
        "CCB - Brás (São Paulo) — Rua Visconde de Parnaíba, 1616",
        "CCB - Água Rasa (São Paulo) — Av. Sapopemba, 415 – Vila Reg. Feijó",
        "CCB - Parque Guaianazes (São Paulo) — Rua Rafi Miguel Ackel, 305",
        "CCB - Perdizes (São Paulo) — Rua Apinajés, 2042",
        "CCB - Saúde (São Paulo) — Rua Joel Jorge de Melo, 368",
        "CCB - Jabaquara (São Paulo) — Av. Eng. George Corbisier, 1194",
        "CCB - Vila Sônia (São Paulo) — R. Tristão de Campos, 308",
        "CCB - Cidade Líder (São Paulo) — Rua Sebastião Ivo, 381",
        "CCB - Vila Rica (Guarulhos) — Spencer Vampré, 434",
        "CCB - José Bonifácio (São Paulo) — Rua Silvianópolis, 495"
    ],

    // Configurações de Relatórios
    reports: {
        defaultFormat: "json",
        availableFormats: ["json", "csv", "pdf"],
        autoSave: true,
        includeLogo: true
    },

    // Configurações de Notificações
    notifications: {
        enabled: true,
        duration: 3000, // 3 segundos
        position: "top-right",
        sound: false,
        maxMessages: 5, // Máximo de 5 mensagens
        messageCount: 0 // Contador de mensagens exibidas
    },

    // Configurações de Backup
    backup: {
        autoSave: true,
        frequency: "realtime", // realtime, daily, weekly
        maxBackups: 10,
        cloudBackup: false
    },

    // Configurações de Interface
    ui: {
        theme: "light", // light, dark
        sidebarCollapsed: false,
        animations: true,
        compactMode: false
    },

    // Configurações de Validação
    validation: {
        requireCode: true,
        requireName: true,
        requireCategory: true,
        requireStatus: true,
        requireLocation: true,
        requirePurchaseDate: true,
        maxCodeLength: 10,
        maxNameLength: 100,
        maxDescriptionLength: 500
    },

    // Configurações de Filtros
    filters: {
        defaultStatus: "",
        defaultCategory: "",
        searchPlaceholder: "Buscar ferramenta...",
        showEmptyResults: true
    },

    // Configurações de Tabela
    table: {
        itemsPerPage: 10,
        sortable: true,
        resizable: true,
        selectable: true,
        showRowNumbers: false
    },

    // Configurações de Modais
    modals: {
        backdropClose: true,
        escapeClose: true,
        animation: true,
        maxWidth: "600px"
    },

    // Configurações de Atalhos de Teclado
    shortcuts: {
        newTool: "Ctrl+N",
        search: "Ctrl+F",
        closeModal: "Escape",
        save: "Ctrl+S",
        export: "Ctrl+E"
    },

    // Configurações de Exportação
    export: {
        filename: "ferramentas-ccb",
        includeDate: true,
        includeTime: false,
        format: "json"
    },

    // Configurações de Manutenção
    maintenance: {
        reminderDays: 30,
        autoStatus: true,
        notificationEnabled: true
    },

    // Configurações de Segurança
    security: {
        confirmDelete: true,
        confirmBulkDelete: true,
        validateInput: true,
        sanitizeData: true
    },

    // Configurações de Performance
    performance: {
        lazyLoading: true,
        debounceSearch: 300,
        cacheResults: true,
        maxCacheSize: 100
    },

    // Configurações de Acessibilidade
    accessibility: {
        highContrast: false,
        largeText: false,
        screenReader: true,
        keyboardNavigation: true
    },

    // Configurações de Logs
    logging: {
        enabled: true,
        level: "info", // debug, info, warn, error
        maxLogs: 1000,
        persistLogs: false
    },

    // Configurações de Atualizações
    updates: {
        checkForUpdates: true,
        autoUpdate: false,
        updateUrl: "",
        currentVersion: "1.0.0"
    },

    // Configurações de Integração
    integration: {
        apiEnabled: false,
        apiUrl: "",
        apiKey: "",
        syncEnabled: false
    },

    // Configurações de Personalização
    customization: {
        allowCustomCategories: true,
        allowCustomStatus: true,
        allowCustomFields: false,
        allowCustomReports: true
    }
};

// Função para obter configuração
function getConfig(path) {
    return path.split('.').reduce((obj, key) => obj && obj[key], CCB_CONFIG);
}

// Função para definir configuração
function setConfig(path, value) {
    const keys = path.split('.');
    const lastKey = keys.pop();
    const obj = keys.reduce((obj, key) => obj[key] = obj[key] || {}, CCB_CONFIG);
    obj[lastKey] = value;
}

// Função para obter categoria
function getCategoryConfig(category) {
    return CCB_CONFIG.categories[category] || {
        name: category,
        icon: "fas fa-question",
        color: "#6b7280"
    };
}

// Função para obter status
function getStatusConfig(status) {
    return CCB_CONFIG.status[status] || {
        name: status,
        icon: "fas fa-question",
        color: "#6b7280",
        bgColor: "#f3f4f6"
    };
}

// Função para validar configuração
function validateConfig() {
    const required = ['company.name', 'system.title', 'system.version'];
    const errors = [];
    
    required.forEach(path => {
        if (!getConfig(path)) {
            errors.push(`Configuração obrigatória não encontrada: ${path}`);
        }
    });
    
    return errors;
}

// Função para salvar configuração no localStorage
function saveConfig() {
    try {
        localStorage.setItem('ccb-config', JSON.stringify(CCB_CONFIG));
        return true;
    } catch (error) {
        console.error('Erro ao salvar configuração:', error);
        return false;
    }
}

// Função para carregar configuração do localStorage
function loadConfig() {
    try {
        const saved = localStorage.getItem('ccb-config');
        if (saved) {
            const parsed = JSON.parse(saved);
            Object.assign(CCB_CONFIG, parsed);
        }
        return true;
    } catch (error) {
        console.error('Erro ao carregar configuração:', error);
        return false;
    }
}

// Função para resetar configuração
function resetConfig() {
    localStorage.removeItem('ccb-config');
    location.reload();
}

// Função para exportar configuração
function exportConfig() {
    const dataStr = JSON.stringify(CCB_CONFIG, null, 2);
    const dataBlob = new Blob([dataStr], {type: 'application/json'});
    const url = URL.createObjectURL(dataBlob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = `ccb-config-${new Date().toISOString().split('T')[0]}.json`;
    link.click();
    
    URL.revokeObjectURL(url);
}

// Função para importar configuração
function importConfig(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = function(e) {
            try {
                const config = JSON.parse(e.target.result);
                Object.assign(CCB_CONFIG, config);
                saveConfig();
                resolve(true);
            } catch (error) {
                reject(error);
            }
        };
        reader.onerror = reject;
        reader.readAsText(file);
    });
}

// Carregar configuração na inicialização
document.addEventListener('DOMContentLoaded', function() {
    loadConfig();
    
    // Validar configuração
    const errors = validateConfig();
    if (errors.length > 0) {
        console.warn('Erros na configuração:', errors);
    }
    
    // Aplicar configurações de tema
    if (CCB_CONFIG.ui.theme === 'dark') {
        document.body.classList.add('dark-theme');
    }
    
    // Aplicar configurações de acessibilidade
    if (CCB_CONFIG.accessibility.highContrast) {
        document.body.classList.add('high-contrast');
    }
    
    if (CCB_CONFIG.accessibility.largeText) {
        document.body.classList.add('large-text');
    }
});

// Exportar configuração para uso global
window.CCB_CONFIG = CCB_CONFIG;
window.getConfig = getConfig;
window.setConfig = setConfig;
window.getCategoryConfig = getCategoryConfig;
window.getStatusConfig = getStatusConfig;
window.saveConfig = saveConfig;
window.loadConfig = loadConfig;
window.resetConfig = resetConfig;
window.exportConfig = exportConfig;
window.importConfig = importConfig;
