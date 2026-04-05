const input = document.getElementById("city");
const button = document.getElementById("search");

const cityName = document.getElementById("cityName");
const icon = document.getElementById("icon");
const temp = document.getElementById("temp");
const weather = document.getElementById("weather");

button.addEventListener("click", async function getWeather() {
    
    const city = input.value;
    const apiKey = "8a155d8cab207dbce605cd53515576c4";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const response = await fetch(url);
    const data = await response.json();

    if(data.cod === "404"){
        alert("City Not Found")
    }
    
    cityName.innerText = data.name;
    temp.innerText = `Temparature: ${data.main.temp.toFixed(1)}°C`;
    weather.innerText = `Weather: ${data.weather[0].description}`;

    const weatherIcon = data.weather[0].main;

    if(weatherIcon === "Clear"){
        icon.innerText = "☀️";
    }else if(weatherIcon === "Clouds"){
        icon.innerText = "☁️";
    }else if(weatherIcon === "Rain"){
        icon.innerText = "🌧️";
    }else if(weatherIcon === "Thunderstorm"){
        icon.innerText = "⛈️";
    }else{
        icon.innerText = "🌍";
    }
})