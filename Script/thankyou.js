document.getElementById('onboardingForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio normal do formulário

    // Coloque aqui o código para validar seu formulário ou outros tratamentos antes do envio

    // Depois de tudo verificado, redireciona para a página de agradecimento
    window.location.href = 'thankyou.html';
});