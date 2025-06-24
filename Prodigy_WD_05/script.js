const API_KEY = "YOUR_API_KEY"; // Your actual API key

const form = document.getElementById("weatherForm");
const cityInput = document.getElementById("cityInput");
const weatherResult = document.getElementById("weatherResult");

const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const description = document.getElementById("description");
const humidity = document.getElementById("humidity");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const city = cityInput.value.trim();
  if (city !== "") {
    fetchWeather(city);
  }
});

function fetchWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`;

  console.log("Fetching weather for:", city);
  console.log("Request URL:", url);

  fetch(url)
    .then((response) => {
      if (!response.ok) throw new Error("City not found");
      return response.json();
    })
    .then((data) => {
      console.log("Weather data:", data);

      cityName.textContent = `${data.name}, ${data.sys.country}`;
      temperature.textContent = `Temperature: ${data.main.temp}°C`;
      description.textContent = `Weather: ${data.weather[0].description}`;
      humidity.textContent = `Humidity: ${data.main.humidity}%`;

      weatherResult.classList.remove("hidden");
      weatherResult.classList.add("result");
    })
    .catch((error) => {
      console.error("Fetch error:", error);
      alert(`Error: ${error.message}`);
      weatherResult.classList.add("hidden");
    });
}
