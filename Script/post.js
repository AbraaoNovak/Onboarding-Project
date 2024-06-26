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

    var identification = document.getElementById("identification") ? document.getElementById("identification").value : '';
    console.log(identification);

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

    var peripheralsChecked = Array.from(document.querySelectorAll('.checkbox-group input[type="checkbox"]:checked'))
                                 .filter(input => input.value !== "All Above") // Exclui 'All Above' dos resultados
                                 .map(input => input.value);
    console.log('Periféricos selecionados:', peripheralsChecked);

     // Novo código para checar os canais selecionados
     var channelsChecked = Array.from(document.querySelectorAll('.checkbox-group-circles input[type="checkbox"]:checked'))
     .map(input => input.value);
console.log('Canais selecionados:', channelsChecked);

var observations = document.getElementById("observations") ? document.getElementById("observations").value : '';
    console.log(observations);

  

    axios.post('https://9245-2804-7f0-b341-f603-550-637f-9ec2-e512.ngrok-free.app/api/onboarding', {
      
    "fullName": fullName,
    "emailTip": email,
    "leader": leader,
    "position": position,
    "location": location,
    "identification": identification,
    "officeLocation": officeLocation,
    "remoteAddress": remoteAddress,
    "department": department,
    "equipment": equipment,
    "date": date,
    "peripherals": peripheralsChecked,
    "channels": channelsChecked,
    "observations": observations
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
