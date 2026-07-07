const inputBox = document.querySelector('.input-box');
const searchbtn = document.getElementById('searchbtn');
const weather_img = document.querySelector('.weather-img');

const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');

const location_not_found = document.querySelector('.location-not-found');
const weather_body =document.querySelector('.weather-body');

async function checkWeather(city) {

    const api_key = "2ef59df37ce9ffe89c453e99a5255045";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${api_key}`;

    const response = await fetch(url);

    const weather_data = await response.json();

    if(weather_data.cod === `404`)
    {
        location_not_found.style.display='flex';
        weather_body.style.display = 'none';
        console.log("error");
        return;
    }

    location_not_found.style.display='none';
    weather_body.style.display = 'flex';
    temperature.innerHTML=`${weather_data.main.temp}℃`;
    description.innerHTML = `${weather_data.weather[0].description}`;
    humidity.innerHTML = `${weather_data.main.humidity}%`;
    wind_speed.innerHTML = `${weather_data.wind.speed}km/hr`;

    switch(weather_data.weather[0].main){
        case "Clear":
            weather_img.src="./clear.png";
            break;
        case "Rain":
            weather_img.src="./rain.png";
            break;
        case "Mist":
            weather_img.src="./mist.png";
            break;
        case "Clouds":
            weather_img.src="./cloud.png";
            break;
        case "Snow":
            weather_img.src="./snow.png";
            break;
        
    }

}


searchbtn.addEventListener('click', () => {
    if(inputBox.value=="")
    {
        alert("please enter any city name");
        return;
    }
    else{
    checkWeather(inputBox.value);
    }
});

inputBox.addEventListener('keypress', (e) => {
    if(e.key==="Enter")
    {
    if(inputBox.value=="")
    {
        alert("please enter any city name");
        return;
    }
    else{
    checkWeather(inputBox.value);
    }
    }
});
