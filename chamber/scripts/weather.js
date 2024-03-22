const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const describeWeather = document.querySelector('#describeWeather')
const weatherDiv = document.querySelector('.weather');
const windSpeed = document.querySelector("#windSpeed");
const url = 'https://api.openweathermap.org/data/2.5/forecast?appid=72084045ad798dbaa9b1eaa3a54a918a&lat=-30.035363832053992&lon=30.88894569159559&units=imperial';
const currDate = new Date();
const currDay = currDate.getDay();

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
  const forecasts = data.list.slice(0, 3);
  forecasts.forEach(forecast => {
      currentTemp.innerHTML = `${forecast.main.temp}&deg;F`;
      describeWeather.innerHTML = `with ${forecast.weather[0].description}`;
      const iconsrc = `https://openweathermap.org/img/w/${forecast.weather[0].icon}.png`;
      let desc = forecast.weather[0].description;
      weatherIcon.setAttribute('src', iconsrc);
      weatherIcon.setAttribute('alt', desc);
      windSpeed.innerHTML = `${forecast.wind.speed}`;
  });

const windChill = calculateWindChill(currentTemp, windSpeed);
document.getElementById('windChill').textContent = windChill;


  for (let i = 1; i <= 3; i++) {
    const forecast = data.list[i * 8];
    const forecastTemp = forecast.main.temp;
    const forecastDesc = forecast.weather[0].description;
    const iconfsrc = `https://openweathermap.org/img/w/${forecast.weather[0].icon}.png`;
    let descf = forecast.weather[0].description;
    weatherIcon.setAttribute('src', iconfsrc);
    weatherIcon.setAttribute('alt', descf);

    // Update HTML for each forecast
    const forecastElement = document.createElement('div');
    forecastElement.innerHTML = `<p>${forecastTemp}&deg;F - ${forecastDesc}</p>`;
    weatherDiv.appendChild(forecastElement);
    const forecastImg = document.createElement('img');
    forecastImg.src = iconfsrc;
    weatherDiv.appendChild(forecastImg);

  }
}


function calculateWindChill(temperature, windSpeed) {
  if (temperature <= 50 && windSpeed >= 3) {
      // Formula for wind chill factor
      return 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
  }
  else {
      return "N/A";
    }
}
  
apiFetch();

if (currDay >= 1 && currDay <= 3) { // Monday, Tuesday, or Wednesday
  document.getElementById('chamberBanner').style.display = 'grid';
}

// Function to close the banner
function closeBanner() {
  document.getElementById('chamberBanner').style.display = 'none';
}