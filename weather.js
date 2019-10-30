class Weather {
   constructor(city) {
     this.apiKey = "0357a7286a5d95d65b7e99c85b6c4d94";
     this.city = city;
   }

  // Fetch weather from API
  async getWeather() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}&units=metric`);

    const responseData = await response.json();
    return responseData;

    // console.log(responseData);
  }

  // Change weather location
  changeLocation(city) {
    this.city = city;
  }
}