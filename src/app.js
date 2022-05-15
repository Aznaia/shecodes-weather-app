function displayTemperature(response) {
  console.log(apiUrl);
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.queryCommandIndeterm("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");

  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
}

let apiKey = "e937ae3f7a274820b678821bd8a9635d";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Seattle&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
