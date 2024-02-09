const search_btn = document.querySelector(".search-btn");
const temperature = document.querySelector(".temperature");
const weather = document.querySelector(".weather");
const humidity_percentage = document.querySelector(".percent");
const wind_speed = document.querySelector(".speed");



async function weatherapi() {
    const api_key = "efdf0f6abc3028aca5ce9cbc13ed0926";
    const city_name = document.querySelector(".location").value;
    // console.log(city_name);
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${api_key}`);
    
    const data = await response.json();
    // console.log(data);
    temperature.innerHTML = `${Math.round(data.main.temp - 273.15)}°C`;
    humidity_percentage.innerHTML = `${data.main.humidity}%`;
    wind_speed.innerHTML = `${data.wind.speed}km/hr`;
    weather.innerHTML = `${data.weather[0].main}`;
}


search_btn.addEventListener("click",function(){
    weatherapi();
});