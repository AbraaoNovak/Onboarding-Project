document.querySelector('.send-btn').addEventListener('click', function(event) {
    axios.post('https://2e06-2804-7f0-b341-f603-5b44-8735-5c57-ced4.ngrok-free.app/api/onboarding', {
     "fullName": "Fernando Dias",
        "emailTip": "fernadno.dias@jemsystems.com",
        "leader": "Fernando Dias",
        "position": "Web dev",
        "location":"Local",
        "officeLocation": "Joinville",
        "department": "IT",
        "equipment": "DELL LATITUDE 3540",
        "date": "2024-04-25",
        "peripherals": [
            "mouse"
        ]
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.error(error);
      });
        console.log('O botão foi clicado!');
    });