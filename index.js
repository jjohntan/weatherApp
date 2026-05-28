// get the first element from the document
const weatherForm = document.querySelector('.weatherForm');
const inputCity = document.querySelector('.cityInput');
// console.log(weatherForm);
// console.log(inputCity);

weatherForm.addEventListener('submit', async event => {
    // prevent submitting behavior
    event.preventDefault();

    const city = inputCity.value;
    // console.log(city);
    if (!city){
        console.log('Errorrrrrrrrrrrr');
    }
    else{
        const weatherData = await getWeatherData(city);
        displayWeatherInfo(weatherData);
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
        console.log(`Errorrrrr data not found`);
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
    const maxTmep = weatherRecord.max_temp;


    console.log(`City name: ${cityName}`);
    console.log(`Morning forecast: ${morningForecast}`);
    console.log(`AfternoonForecast forecast: ${afternoonForecast}`);
    console.log(`Night forecast: ${nightForecast}`);
    console.log(`summary forecast: ${summaryForecast}`);
    console.log(`Summary when: ${summaryWhen}`);
    console.log(`Min temperature: ${minTemp}`);
    console.log(`Max temperature: ${maxTmep}`);
}