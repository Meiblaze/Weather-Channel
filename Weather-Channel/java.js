let city = document.querySelector('#ciudad');
let temp = document.querySelector('#temperatura');
let wicon = document.querySelector('#wicon');
let description = document.querySelector('#descripcion');
let input = document.querySelector('input');
let buttonSend = document.querySelector('button')


function chargeCity(){    
    
    $.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + input.value + "&appid=0fcee8caa385e992970119f097664284&units=metric&lang=es", function(data){
        city.textContent = data.name;
        temp.textContent = data.main.temp;
        description.textContent = data.weather[0].description;
        let icon = data.weather[0].icon;
        wicon.src = "http://openweathermap.org/img/wn/"+ icon +"@2x.png";
        document.querySelector(".container").style.visibility = "visible";
    })  
}


function isEmpty(){
    if(input.value.length === 0){
        alert("Enter a city");
    }
}


function verifyCity(){
    $.ajax({
        url: "https://api.openweathermap.org/data/2.5/weather?q=" + input.value + "&appid=0fcee8caa385e992970119f097664284&units=metric&lang=es"
    }).fail(function(jqXHR){

        if(jqXHR.status === 404){
            alert("Requested page not found [404], please enter a city valid");
        } 
    })
}

function cleanInput(){
    input.value = "";
}

buttonSend.addEventListener('click', function(){
    isEmpty();
    verifyCity(); 
    chargeCity();
    cleanInput();

})