const apiKey = '44c29caaf779f2956604130c3b58fa03'; // Remplace par ta clé API (ex: OpenWeather)
const configUrl = 'conf.json';

async function fetchConfig() {
    const response = await fetch(configUrl);
    return response.json();
}

async function fetchWeather(ville) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ville}&appid=${apiKey}&units=metric&lang=fr`;
    const response = await fetch(url);
    return response.json();
}

async function displayWeather() {
    const config = await fetchConfig();
    const weather = await fetchWeather(config.ville);

    document.getElementById('city-name').textContent = config.ville;
    document.getElementById('temperature').textContent = `Température : ${weather.main.temp}°C`;
    document.getElementById('description').textContent = `Conditions : ${weather.weather[0].description}`;
}

// Mise à jour toutes les heures (3600000 ms)
displayWeather();
setInterval(displayWeather, 3600000);
