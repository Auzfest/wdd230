// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const describeWeather = document.querySelector('#describeWeather')
const captionDesc = document.querySelector('figcaption');
const url = 'https://api.openweathermap.org/data/2.5/forecast?appid=72084045ad798dbaa9b1eaa3a54a918a&lat=-30.035363832053992&lon=30.88894569159559&units=imperial';


async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }

  
function displayResults(data) {
  forecastContainer.innerHTML = ''; // Clear previous forecast data
  const forecasts = data.list.slice(0, 3); // Taking only the first 3 forecasts
  forecasts.forEach(forecast => {
      currentTemp.innerHTML = forecast.main.temp;
      describeWeather.innerHTML = forecast.weather[0].description;
  });
  }
  
  apiFetch();