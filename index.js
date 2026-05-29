// get the first element from the document
const weatherForm = document.querySelector('.weatherForm');
const inputCity = document.querySelector('.cityInput');
const card = document.querySelector('.card');
// console.log(weatherForm);
// console.log(inputCity);

weatherForm.addEventListener('submit', async event => {
    // prevent submitting behavior
    event.preventDefault();

    const city = inputCity.value;
    // console.log(city);
    if (!city){
        console.error('Errorrrrrrrrrrrr');
    }
    else{
        try{
            const weatherData = await getWeatherData(city);
            displayWeatherInfo(weatherData);
        }
        catch{
            console.error("Error");
        }
    }
});

async function getWeatherData(city){
    const apiUrl 
    = `https://api.data.gov.my/weather/forecast?contains=${city}@location__location_name`;

    const response = await fetch(apiUrl);

    if (!response.ok){
        throw new Error('Could not fetch weather data');
    }

    return response.json();
}

function displayWeatherInfo(data){
    
    if (!data || data.length === 0){
        console.error(`Errorrrrr data not found`);
        return;
    }

    //get first data from array
    const weatherRecord = data[0];

    // extract data like city name and forecast
    const cityName = weatherRecord.location.location_name;
    const morningForecast = weatherRecord.morning_forecast;
    const afternoonForecast = weatherRecord.afternoon_forecast;
    const nightForecast = weatherRecord.night_forecast;
    const summaryForecast = weatherRecord.summary_forecast;
    const summaryWhen = weatherRecord.summary_when;
    const minTemp = weatherRecord.min_temp;
    const maxTemp = weatherRecord.max_temp;

    // clear the card
    card.textContent = "";
    card.style.display = "flex";

    // create new element
    const _cityName = document.createElement("h1");
    _cityName.textContent = cityName;
    _cityName.classList.add("cityDisplay");

    const _morningForecast = document.createElement("p");
    _morningForecast.textContent = `Morning: ${morningForecast}`;
    _morningForecast.classList.add("morningDisplay");

    const _afternoonForecast = document.createElement("p");
    _afternoonForecast.textContent = `Afternoon: ${afternoonForecast}`;
    _afternoonForecast.classList.add("afternoonDisplay");

    const _nightForecast = document.createElement("p");
    _nightForecast.textContent = `Night: ${nightForecast}`;
    _nightForecast.classList.add("nightDisplay");

    const _summaryForecast = document.createElement("p");
    _summaryForecast.textContent = `Summary forecast: ${summaryForecast}`;
    _summaryForecast.classList.add("summaryForecast");

    const _summaryWhen = document.createElement("p");
    _summaryWhen.textContent = `Summary when: ${summaryWhen}`;
    _summaryWhen.classList.add("summaryWhen");

    const _minTemp = document.createElement("p");
    _minTemp.textContent = `Minimum temperature: ${minTemp}°C`;
    _minTemp.classList.add("minTemp");

     const _maxTemp = document.createElement("p");
    _maxTemp.textContent = `Maximum temperature: ${maxTemp}°C`;
    _maxTemp.classList.add("maxTemp");
    
    // append information to the card
    card.appendChild(_cityName);
    card.appendChild(_morningForecast);
    card.appendChild(_afternoonForecast);
    card.appendChild(_nightForecast);
    card.appendChild(_summaryForecast);
    card.appendChild(_summaryWhen);
    card.appendChild(_minTemp);
    card.appendChild(_maxTemp);
}