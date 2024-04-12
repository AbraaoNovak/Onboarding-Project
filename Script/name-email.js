document.getElementById('fullName').addEventListener('input', function() {
    var fullName = this.value.trim();
    var names = fullName.split(/\s+/); // Divide o nome completo por espaços
    if (names.length > 1) {
        var firstName = normalizeString(names[0]);
        var lastName = normalizeString(names[names.length - 1]);
        var email = firstName + '.' + lastName;
        email = email.replace(/[^a-zA-Z0-9.]/g, '').toLowerCase(); // Remove caracteres especiais e converte para minúsculas
        document.getElementById('email').value = email + '@jemsystems.com'; // Suponha que todos os emails seguem este formato
    } else {
        document.getElementById('email').value = '';
    }
});

function normalizeString(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // Remove acentos
}