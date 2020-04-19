const ui = new UI();
const storage = new Storage();
const weatherLocation = storage.getLocationData();
const weather = new Weather(weatherLocation.city);

document.addEventListener('DOMContentLoaded', getWeather);

function getWeather() {
  weather.getWeather()
    .then(results => {
      ui.paint(results);
      storage.setLocationData(results.name);
    })
    .catch(err => {
      ui.clear();
    });
}

document.querySelector('#w-change-btn').addEventListener('click', (e) => {
  const city = document.querySelector('#city').value;
  weather.changeLocation(city);
  getWeather();
  $('#locModal').modal('hide');
});