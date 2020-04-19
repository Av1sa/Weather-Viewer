class UI {
  constructor() {
    this.location = document.querySelector('#w-location');
    this.description = document.querySelector('#w-description');
    this.temperature = document.querySelector('#w-temperature');
    this.icon = document.querySelector('#w-icon');
    this.humidity = document.querySelector('#w-humidity');
    this.feelsLike = document.querySelector('#w-feels-like');
    this.wind = document.querySelector('#w-wind');
    this.sunrise = document.querySelector('#w-sunrise');
    this.sunset = document.querySelector('#w-sunset');
  }

  paint(weather) {
    this.location.textContent = weather.name;
    let s = weather.weather[0].description;
    this.description.textContent = s.charAt(0).toUpperCase() + s.substr(1);
    this.temperature.textContent = `${weather.main.temp} °C`;
    this.icon.setAttribute('src', `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`);
    this.humidity.textContent = `Relative humidity: ${weather.main.humidity}%`;
    this.feelsLike.textContent = `Feels like: ${weather.main.feels_like} °C`;
    this.wind.textContent = `Wind: ${weather.wind.speed} m/sec`;
    this.sunrise.textContent = `Sunrise: ${new Date(weather.sys.sunrise * 1000).toLocaleTimeString("ru-Ru")}`;
    this.sunset.textContent = `Sunset: ${new Date(weather.sys.sunset * 1000).toLocaleTimeString("ru-Ru")}`;
  }

  clear() {
    this.location.textContent = 'No city found';
    this.description.textContent = '';
    this.temperature.textContent = '';
    this.icon.setAttribute('src', '');
    this.humidity.textContent = '';
    this.feelsLike.textContent = '';
    this.wind.textContent = '';
    this.sunrise.textContent = '';
    this.sunset.textContent = '';
  }
}