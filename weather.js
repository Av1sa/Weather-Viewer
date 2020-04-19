class Weather {
  constructor(city) {
    this.apiKey = '898a7d417fb2086401ac9e7c6c047df7';
    this.city = city;
  }

  //Fetch weather from API
  async getWeather() {
    const response = await fetch(`//api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}&units=metric`);
    const responseData = await response.json();
    return responseData
  }

  //Change location
  changeLocation(city) {
    if (city !== null) {
      this.city = city;
    }
  }
}

