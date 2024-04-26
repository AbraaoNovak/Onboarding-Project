document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.send-btn').addEventListener('click', function(event) {
    var fullName = document.getElementById("fullName") ? document.getElementById("fullName").value : '';
    console.log(fullName);

    var email = document.getElementById("email") ? document.getElementById("email").value : '';
    console.log(email);

    var leader = document.getElementById("leader") ? document.getElementById("leader").value : '';
    console.log(leader);

    var position = document.getElementById("position") ? document.getElementById("position").value : '';
    console.log(position);

    var location = document.getElementById("location") ? document.getElementById("location").value : '';
    console.log(location);

    var officeLocation = document.getElementById("officeLocation") ? document.getElementById("officeLocation").value : '';
    console.log(officeLocation);

    var remoteAddress = document.getElementById("remoteAddress") ? document.getElementById("remoteAddress").value : '';
    console.log(remoteAddress);

    var department = document.getElementById("department") ? document.getElementById("department").value : '';
    console.log(department);

    var equipment = document.getElementById("equipment") ? document.getElementById("equipment").value : '';
    console.log(equipment);

    var date = document.getElementById("date") ? document.getElementById("date").value : '';
    console.log(date);

    var stockStatus = document.getElementById("#stockStatus") ? document.getElementById("#stockStatus").value : '';
    console.log(stockStatus);

  

    axios.post('https://fireguard.jemsystems.com/api/onboarding', {
      "emailTip": "abraao.novak@jemsystems.com",
      "leader": "Eu mermo",
      "position": "Severino",
      "location": "Local",
      "officeLocation": "Joinville",
      "department": "IT",
      "equipment": "DELL LATITUDE 3540",
      "date": "2024-12-24",
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
});
