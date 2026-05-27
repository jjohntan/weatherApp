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
    }
});

async function getWeatherData(city){
    const apiUrl 
    = `https://api.data.gov.my/weather/forecast?contains=${city}@location__location_id`;

    const response = await fetch(apiUrl);

    if (!response.ok){
        throw new Error('Could not fetch weather data');
    }

    console.log(response);
}