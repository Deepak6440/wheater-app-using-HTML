//api = https://api.openweathermap.org/data/2.5/weather?q=germany&appid=5102f997e515e703c5221007a62318e5&units=metric

const apiKey = "5102f997e515e703c5221007a62318e5";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const serachBox = document.querySelector(".search input");
const serachButton = document.querySelector(".search button");
const wheaterIcon = document.querySelector(".wheater-icon");
async function checkWheater(city)
{
    const respone = await fetch(apiUrl + city + `&appid=${apiKey}`);
    
    if(respone.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".wheater").style.display = "none";
    }
    else{
    let data = await respone.json();
    document.querySelector(".wheater").style.display = "block";
    document.querySelector(".error").style.display = "none";
   // console.log(data);
   document.querySelector(".city").innerHTML = data.name;
   document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
   document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
   document.querySelector(".wind").innerHTML = data.wind.speed + " km/h ";

   // Put the wheater-icon based on wheather

   if(data.weather[0].main == "Clouds"){
     wheaterIcon.src = "images/clouds.png";
   }

   else if(data.weather[0].main == "Clear"){
        wheaterIcon.src = "images/clear.png";
    }
    else if(data.weather[0].main == "Rain"){
        wheaterIcon.src = "images/rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        wheaterIcon.src = "images/drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        wheaterIcon.src = "images/mist.png";
    }
 }
}

serachButton.addEventListener("click", ()=> {
    checkWheater(serachBox.value);
})
