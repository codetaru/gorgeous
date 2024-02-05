function refreshWeather(response) {
  let temperatureElement = document.querySelector("#temperature");
let temperature = response.data.temperature.current;
let cityElement = document.querySelector("#city");
  

cityElement.innerHTML = response.data.city;
temperatureElement.innerHTML = Math.round(temperature);
  
}




function searchCity(city) {
let apiKey = "6c965c38ef26afd0073obc5a4fe850t0";
let apiUrl = 'https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric';
axios.get(apiUrl).then(refreshWeather);
}




function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  
searchCity(searchInput.value);
}


let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("Paris");