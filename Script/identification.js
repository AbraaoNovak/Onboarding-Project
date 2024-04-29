document.getElementById('identification').addEventListener('input', function(e) {
    var value = e.target.value;
    // Permite apenas números e pontos, e exclui qualquer outro caractere
    value = value.replace(/[^0-9./]/g, '');
    e.target.value = value;
});