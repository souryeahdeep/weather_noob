const APIKEY="012162b776a3e98967220221344821de";
const APIUrl="https://api.openweathermap.org/data/2.5/weather?units=metric";
const searchBox=document.querySelector(".search input");

const whole=document.querySelector(".search");
const searchBtn=document.querySelector(".search button");
const temp=document.querySelector(".temp");
const humi=document.querySelector(".humidity");
const wind=document.querySelector(".wind");
const loc=document.querySelector("#loc");
const weat=document.querySelector(".weather");
const err=document.querySelector(".error");
const card=document.querySelector(".card");
const weathericon=document.querySelector(".weathericon");
console.log(searchBox.value);
async function checkWeather(city) {
    const response=await fetch(APIUrl+`&q=${city}`+`&appid=${APIKEY}`);
    var data=await response.json();
    console.log(data);
     if(data.cod==404)
     {
        weat.style.display="none";
        err.style.display="block";
        
     }
    else{
        err.style.display="none";
        weat.style.display="block";
        temp.innerText=data.main.temp+"°C";
        humi.innerText=data.main.humidity+"%";
        wind.innerText=data.wind.speed+"Km/H";
        loc.innerText=data.name;
    
        if(data.weather[0].main=="Clouds"){
            weathericon.src = "./cloudy.png";
            card.style.background="linear-gradient(135deg, #87b3a7, #297bb7)";
        }
        if(data.weather[0].main=="Clear"){
            weathericon.src = "./sun.png";
            card.style.background="linear-gradient(135deg, #4fe5ff, #fffdaf)";
        }
        if(data.weather[0].main=="Rain"){
            weathericon.src = "./storm.png";
        }
        if(data.weather[0].main=="Drizzle"){
            weathericon.src = "./drizzle-night.png";
        }
        if(data.weather[0].main=="Snow"){
            weathericon.src = "./snow.png";
        }
        
    }
   
}

searchBtn.addEventListener("click", ()=> {
    
    
    

    checkWeather(searchBox.value);
    
})

