function calculateWindChill(temperature, windSpeed) {
    if (temperature <= 50 && windSpeed >= 3) {
        // Formula for wind chill factor
        return 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
    }
    else {
        return "N/A";
      }
}

// Function to update weather information
function updateWeather() {
    const currentTemperature = 40; // in Celsius
    const currentWindSpeed = 20; // in km/h

    const windChill = calculateWindChill(currentTemperature, currentWindSpeed);

    document.getElementById('temperature').textContent = currentTemperature;
    document.getElementById('windSpeed').textContent = currentWindSpeed;
    document.getElementById('windChill').textContent = windChill.toFixed(1);
}

window.onload = updateWeather;