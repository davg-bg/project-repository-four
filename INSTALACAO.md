# 🚀 Guia de Instalação - CCB Ferramentas

## 📋 Pré-requisitos

- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Acesso à internet (para carregar fontes e ícones)
- Permissões de JavaScript habilitadas

## 🔧 Instalação

### Opção 1: Instalação Local (Recomendada)

1. **Baixe os arquivos**
   - Faça o download de todos os arquivos do projeto
   - Extraia em uma pasta de sua preferência

2. **Abra o sistema**
   - Navegue até a pasta onde os arquivos foram extraídos
   - Clique duas vezes no arquivo `index.html`
   - O sistema abrirá em seu navegador padrão

3. **Primeiro acesso**
   - O sistema carregará automaticamente
   - Dados de exemplo estarão disponíveis
   - Todas as funcionalidades estarão ativas

### Opção 2: Servidor Web

1. **Configure um servidor web**
   - Apache, Nginx, ou servidor local
   - Coloque os arquivos na pasta do servidor

2. **Acesse via URL**
   - `http://localhost/ccb-ferramentas/`
   - Ou o endereço configurado no servidor

## ⚙️ Configuração Inicial

### 1. Personalização da Empresa

1. Acesse a seção **Configurações**
2. Edite o nome da empresa
3. Configure a frequência de backup
4. Salve as alterações

### 2. Configuração de Categorias

O sistema vem com categorias pré-definidas:
- **Elétrica**: Ferramentas elétricas
- **Manual**: Ferramentas manuais
- **Hidráulica**: Equipamentos hidráulicos
- **Pneumática**: Equipamentos pneumáticos

### 3. Configuração de Status

Status disponíveis:
- **Disponível**: Pronta para uso
- **Em Uso**: Atualmente sendo utilizada
- **Em Manutenção**: Em processo de manutenção
- **Inativo**: Temporariamente indisponível

## 📱 Primeiro Uso

### 1. Dashboard
- Visualize estatísticas em tempo real
- Use as ações rápidas para operações comuns

### 2. Adicionar Ferramentas
1. Clique em **"Nova Ferramenta"**
2. Preencha os campos obrigatórios:
   - Código (único)
   - Nome
   - Categoria
   - Status
   - Localização
   - Data de aquisição
3. Clique em **"Adicionar"**

### 3. Gerenciar Ferramentas
- Use os filtros para encontrar ferramentas
- Edite ou exclua conforme necessário
- Monitore o status de cada ferramenta

## 🔒 Segurança

### Armazenamento Local
- Os dados são salvos no navegador (localStorage)
- Não há transmissão de dados para servidores externos
- Backup automático a cada alteração

### Validação de Dados
- Todos os campos obrigatórios são validados
- Códigos duplicados são impedidos
- Confirmação para operações críticas

## 📊 Backup e Restauração

### Backup Automático
- Dados salvos automaticamente
- Múltiplas versões mantidas
- Recuperação automática em caso de erro

### Exportação Manual
1. Acesse a seção **Relatórios**
2. Escolha o tipo de relatório
3. Clique em **"Gerar Relatório"**
4. O arquivo será baixado automaticamente

## 🛠️ Solução de Problemas

### Sistema não carrega
- Verifique se o JavaScript está habilitado
- Tente outro navegador
- Limpe o cache do navegador

### Dados não salvam
- Verifique o espaço disponível no navegador
- Desabilite extensões que possam interferir
- Tente modo privado/incógnito

### Interface não responsiva
- Verifique a resolução da tela
- Use zoom do navegador se necessário
- Teste em diferentes dispositivos

## 📞 Suporte

### Documentação
- Consulte o arquivo `README.md`
- Verifique as configurações em `config.js`
- Teste as funcionalidades básicas

### Compatibilidade
- **Chrome**: 80+
- **Firefox**: 75+
- **Safari**: 13+
- **Edge**: 80+

## 🎯 Próximos Passos

1. **Familiarize-se com a interface**
2. **Adicione suas ferramentas**
3. **Configure as categorias conforme necessário**
4. **Gere relatórios para análise**
5. **Personalize as configurações**

## 📝 Notas Importantes

- O sistema funciona offline após o carregamento inicial
- Dados são mantidos apenas no navegador local
- Recomenda-se fazer backup regular dos dados
- Teste todas as funcionalidades antes do uso em produção

---

**Sistema desenvolvido especificamente para a CCB - Companhia de Construção e Beneficiamento**
