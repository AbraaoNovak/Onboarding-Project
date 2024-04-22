document.addEventListener('DOMContentLoaded', function() {
    var locationSelect = document.getElementById('location');
    var additionalInfo = document.getElementById('additional-info');

    locationSelect.addEventListener('change', function() {
        // Limpa o container sempre que o valor mudar
        additionalInfo.innerHTML = '';

        if (this.value === 'Local') {
            // Cria um novo select com as opções de localidades
            var newSelect = document.createElement('select');
            newSelect.id = 'officeLocation';
            newSelect.name = 'officeLocation';
            newSelect.classList.add('location'); // Use a mesma classe que seus outros selects
            var options = ['Joinville', 'São Paulo', 'London', 'Arizona', 'Portugal'];
            options.forEach(function(location) {
                var optionElement = document.createElement('option');
                optionElement.value = location;
                optionElement.textContent = location;
                newSelect.appendChild(optionElement);
            });

            var label = document.createElement('label');
            label.textContent = 'Office Location: ';
            label.appendChild(newSelect);
            label.classList.add('location'); // Mantenha a consistência com suas outras labels
            additionalInfo.appendChild(label);
        } else if (this.value === 'Remote') {
            // Cria um campo de texto para o endereço remoto
            var input = document.createElement('input');
            input.type = 'text';
            input.id = 'remoteAddress';
            input.name = 'remoteAddress';
            input.classList.add('form-input'); // Use a mesma classe que seus outros inputs

            var label = document.createElement('label');
            label.textContent = 'Remote Address: ';
            label.appendChild(input);
            label.classList.add('remote-adress'); // Mantenha a consistência com suas outras labels
            additionalInfo.appendChild(label);
        }
    });
});