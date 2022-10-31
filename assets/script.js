const searchForm = document.querySelector(".search-location");
const cityValue = document.querySelector(".search-location input");
const cityName = document.querySelector(".city-name p");
const cardBody = document.querySelector(".card-body");

const spitOutFahrenheit = (kelvin) => {
  fahrenheit = Math.round((kelvin - 273.15) * 1.8 + 32);
  return fahrenheit;
};

updateWeatherApp = (city) => {
  cityName.textContent = city.name;
  cardBody.innerHTML = `
    <div class="card-mid row" style="font-size: large;">
            <div class="col-12 text-center temp" style="font-size: x-large;" >
                <h1>Currently:</h1>
                <span>${spitOutFahrenheit(city.main.temp)}&deg;F</span>
            </div>
            <div class="col-12 condition-temp">
                <p><b>High Temp:</b></p>
                <p>${spitOutFahrenheit(city.main.temp_max)}&deg;F</p>
                </div>
            <div class="col-12 condition-temp">
                <p><b>Low Temp:</b></p>
                <p>${spitOutFahrenheit(city.main.temp_min)}&deg;F</p>
            </div>
            <div class="col-12 condition-temp">
                <p><b>Forcast:</b></p>
                <p>${city.weather[0].description}</p>
            </div>
            <div class="col-12 condition-temp">
                <p><b>Humidity %:</b></p>
                <p>${city.main.humidity}%</p>
            </div>
        </div>
    `;
};

// add an event listner to the form
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const citySearched = cityValue.value.trim();
  console.log(citySearched);
  searchForm.reset();

  requestCity(citySearched)
    .then((data) => {
      updateWeatherApp(data);
    })
    .catch((error) => {
      console.log(error);
    });
});
