const cityName = document.querySelector("#city-name");
const form = document.querySelector("form");
const innerData = document.querySelector(".data")
const loading = document.querySelector(".loading");

const broken_clouds_day = document.querySelector('#broken_clouds_day')
const broken_clouds_night = document.querySelector('#broken_clouds_night')
const clear_sky_day = document.querySelector('#clear_sky_day')
const clear_sky_night = document.querySelector('#clear_sky_night')
const day_snow = document.querySelector('#day_snow')
const night_snow = document.querySelector('#night_snow')
const few_clouds_day = document.querySelector('#few_clouds_day')
const few_clouds_night = document.querySelector('#few_clouds_night')
const heavy_rain_day = document.querySelector('#heavy_rain_day')
const heavy_rain_night = document.querySelector('#heavy_rain_night')
const mist_day = document.querySelector('#mist_day')
const mist_night = document.querySelector('#mist_night')
const scattered_clouds_day = document.querySelector('#scattered_clouds_day')
const scattered_clouds_night = document.querySelector('#scattered_clouds_night')
const shower_rain_day = document.querySelector('#shower_rain_day')
const shower_rain_night = document.querySelector('#shower_rain_night')
const thunderstorm = document.querySelector('#thunderstorm')



function resetOpacity() {
  broken_clouds_day.style.opacity = '0'
  broken_clouds_night.style.opacity = '0'
  clear_sky_day.style.opacity = '0'
  clear_sky_night.style.opacity = '0'
  day_snow.style.opacity = '0'
  night_snow.style.opacity = '0'
  few_clouds_day.style.opacity = '0'
  few_clouds_night.style.opacity = '0'
  heavy_rain_day.style.opacity = '0'
  heavy_rain_night.style.opacity = '0'
  mist_day.style.opacity = '0'
  mist_night.style.opacity = '0'
  scattered_clouds_day.style.opacity = '0'
  scattered_clouds_night.style.opacity = '0'
  shower_rain_day.opacity = '0'
  shower_rain_night.style.opacity = '0'
  thunderstorm.style.opacity = '0'
  // mistNight.style.opacity = '0'
}

const apiKey = "dc3ad3b4c9097cc45f30d92ade5b2181";

form.addEventListener("submit", (event) => {
  event.preventDefault();
  innerData.innerHTML = ''
  loading.style.display = "block"

  console.log(cityName.value);

  const fetchWeather = async function () {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=${apiKey}`
    );
    const responseJSON = await response.json();
    return responseJSON;
  };

  // cityName.value=''  

  const weatherData = fetchWeather();
  weatherData.then((data) => {

    let html = `  
    
                <div class="city-container">
                <div class="city-name">${data.name},${data.sys.country}</div>
                <div class="weather-condition">${data.weather[0].main}</div>
                </div>

                <div class="temperature-container">
                <div class="weather-icon"><img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt=""></div>
                <div class="temp">${(data.main.temp - 273.15).toFixed(2)}°C</div>
                <div class="minmax">
                    <div class="min">Min: ${(data.main.temp_min - 273.15).toFixed(2)}°C</div>
                    <div class="max">Max: ${(data.main.temp_max - 273.15).toFixed(2)}°C</div>
                </div>
                 </div>
    `
    innerData.innerHTML = html;
    console.log(data);
    console.log();
    loading.style.display = "none"

    switch (data.weather[0].icon) {
      case '01d':
        resetOpacity()
        clear_sky_day.style.opacity = 1
        break;
      case '01n':
        resetOpacity()
        clear_sky_night.style.opacity = 1
        break;
      case '02d':
        resetOpacity()
        few_clouds_day.style.opacity = 1
        break
      case '02n':
        resetOpacity()
        few_clouds_night.style.opacity = 1
      case '03d':
        resetOpacity()
        scattered_clouds_day.style.opacity = 1
        break
      case '03n':
        resetOpacity()
        scattered_clouds_night.style.opacity = 1
        break
      case '04d':
        resetOpacity()
        broken_clouds_day.style.opacity = 1
        break
      case '04n':
        resetOpacity()
        broken_clouds_night.style.opacity = 1
        break
      case '09d':
        resetOpacity()
        shower_rain_day.style.opacity = 1
        break
      case '09n':
        resetOpacity()
        shower_rain_night.style.opacity = 1
        break
      case '10d':
        resetOpacity()
        heavy_rain_day.style.opacity = 1
        break
      case '10n':
        resetOpacity()
        heavy_rain_night.style.opacity = 1
        break
      case '11d':
        resetOpacity()
        thunderstorm.style.opacity = 1
        break
      case '11n':
        resetOpacity()
        thunderstorm.style.opacity = 1
        break
      case '13d':
        resetOpacity()
        day_snow.style.opacity = 1
        break
      case '13n':
        resetOpacity()
        night_snow.style.opacity = 1
      case '50d':
        resetOpacity()
        mist_day.style.opacity = 1
        break
      case '50n':
        resetOpacity()
        mist_night.style.opacity = 1

      default:
        break;
    }
  })

  loading.style.display = "block"



})
