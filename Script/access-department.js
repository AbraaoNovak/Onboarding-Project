document.addEventListener('DOMContentLoaded', function() {
    var departmentSelect = document.getElementById('department');
    var accessSectionContainer = document.getElementById('access-section');

    departmentSelect.addEventListener('change', function() {
        // Limpa a seção de acesso caso já exista
        accessSectionContainer.innerHTML = '';

        // Obtém o valor selecionado e normaliza para o caso
        var selectedDepartment = this.options[this.selectedIndex].text;

        if (departmentAccessMap[selectedDepartment]) {
            // Cria um elemento para exibir os acessos
            var accessInfo = document.createElement('div');
            accessInfo.textContent = 'Acessos: ' + departmentAccessMap[selectedDepartment];
            accessInfo.classList.add('access-info'); // Classe para estilizar o texto, se necessário
            accessSectionContainer.appendChild(accessInfo);
        }
    });
});

const departmentAccessMap = {
    'BPM': 'Netsuite Acesso | Google Drive | GitLab | Clickup Member',
    'Costumer Success': 'Netsuite Acesso | 8x8 | Magento | Sales Force | Pacejet | Google Drive',
    'Sales': 'Netsuite Acesso | Google Drive | 8x8 | Magento | Sales Force | Pacejet',
    'IT': 'Netsuite Cadastro | Google Drive | GitLab | ClickUp Member',
    'Marketing': 'Netsuite Cadastro | Google Drive | ClickUp Member',
    'Sales Support': 'Netsuite Acesso | 8x8 | Magento | Sales Force | Pacejet | Google Drive',
    'Online Sales': 'Netsuite Acesso | Pacejet | Google Drive',
    'Estimating': 'Netsuite Cadastro | Google Drive | ClickUp Member',
    'Project Management': 'Netsuite Cadastro | Google Drive | ClickUp Member',
    'FA Design': 'Netsuite Cadastro | Google Drive | ClickUp Member',
    'BDA Design': 'Netsuite Cadastro | Google Drive | ClickUp Member',
    'BIM Design': 'Netsuite Cadastro | Google Drive | ClickUp Guest',
    'Finance': 'Netsuite Acesso | 8x8 | Google Drive',
    'Purchasing': 'Netsuite Acesso | 8x8 | Pacejet | Google Drive',
    'Logistics': 'Netsuite Acesso | Pacejet | Google Drive'
    
};