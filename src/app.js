function formatDate(timestamp) {
let date = new Date(timestamp);
let hours = date.getHours();
let minutes = date.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let day = days[date.getDay()];

return `${day} ${hours}:${minutes}`
}

function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let dateElement = document.querySelector("#date");
  let iconElement = document.querySelector("#icon");

  celsiusTemp = response.data.main.temp;

  temperatureElement.innerHTML = Math.round(celsiusTemp);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
  dateElement.innerHTML = formatDate(response.data.dt * 1000);
  iconElement.setAttribute("src",
  `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
  
  iconElement.setAttribute("alt",
  response.data.weather[0].description);

}

function search(city) {
  let apiKey = "e937ae3f7a274820b678821bd8a9635d";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
  axios.get(apiUrl).then(displayTemperature);
}

function handleSubmit(event) {
event.preventDefault();
let cityInputElement = document.querySelector("#city-input");
search(cityInputElement.value);
}

function displayFahrenheitTemperature(event) {
event.preventDefault();
let fahrenheitTemp = (celsiusTemp * 9) / 5 + 32;
let temperatureElement = document.querySelector("#temperature");
temperatureElement.innerHTML = Math.round(fahrenheitTemp);
}


let celsiusTemp = null;

//Search form global variables
let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);
//units global variables
let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", displayFahrenheitTemperature);

search("Seattle");