const API_KEYS = `c5d3e7572bdba2c8736e732daf5c7184`;
const weather = document.querySelector(".js-weather");

const COORDS = "coords";

function getWeather(lat, lon) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEYS}&units=metric`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      const temperature = parseInt(json.main.temp);
      const place = json.name;
      weather.innerHTML = `${Math.floor(temperature)}°C in ${place}`;
    });
}

function saveCoords(coordsobj) {
  localStorage.setItem(COORDS, JSON.stringify(coordsobj));
}

function successPosition(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsobj = {
    latitude,
    longitude,
  };
  saveCoords(coordsobj);
  getWeather(latitude, longitude);
}

function failurePosition() {
  console.log(`please let me know where you are.`);
}

function loadCoords() {
  navigator.geolocation.getCurrentPosition(successPosition, failurePosition);
}

function executeCoords() {
  const currentUserPosition = localStorage.getItem(COORDS);
  if (currentUserPosition === null) {
    loadCoords();
  } else {
    const parseCoords = JSON.parse(currentUserPosition);
    getWeather(parseCoords.latitude, parseCoords.longitude);
  }
}

function init() {
  executeCoords();
}

init();
