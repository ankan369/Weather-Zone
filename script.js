const submit = document.getElementById("submit");
const searchBar = document.getElementById("city");
async function fetchWeather(city) {
  const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "4ed297b502msh51b08bced4d4751p16049fjsn0a754311b6b3",
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    const temp = result.temp;
    const WeatherMiniTemp = result.min_temp;
    const LiveMaxtemp = result.max_temp;
    const Livecloud = result.cloud_pct;
    const LiveFeelsLike = result.feels_like;
    const humidity = result.humidity;
    const LiveWindSpeed = result.wind_speed;
    const LiveWindDegrees = result.wind_degrees;
    const LiveSunset = result.sunset;
    const LiveSunrise = result.sunrise;

    const liveTemp = document.getElementById("temp");
    const MiniTemp = document.getElementById("min_temp");
    const MaxTemp = document.getElementById("max_temp");
    const cloudPct = document.getElementById("cloud_pct");
    const feelsLike = document.getElementById("feels_like");
    const humiDity = document.getElementById("humidity");
    const WindSpeed = document.getElementById("wind_speed");
    const WindDegrees = document.getElementById("wind_degrees");
    const SunRise = document.getElementById("sunrise");
    const SunSet = document.getElementById("sunset");
    const humiDity2 = document.getElementById("humidity2");
    const WindSpeed2 = document.getElementById("wind_speed2");

    liveTemp.innerHTML = `${temp}`;
    MiniTemp.innerHTML = `${WeatherMiniTemp}`;
    MaxTemp.innerHTML = `${LiveMaxtemp}`;
    cloudPct.innerHTML = `${Livecloud}`;
    feelsLike.innerHTML = `${LiveFeelsLike}`;
    humiDity.innerHTML = `${humidity}`;
    WindSpeed.innerHTML = `${LiveWindSpeed}`;
    WindDegrees.innerHTML = `${LiveWindDegrees}`;
    SunRise.innerHTML = `${LiveSunrise}`;
    SunSet.innerHTML = `${LiveSunset}`;
    humiDity2.innerHTML = `${humidity}`;
    WindSpeed2.innerHTML = `${LiveWindSpeed}`;

    const cityName = document.getElementById("cityname");
    cityName.innerHTML = city.charAt(0).toUpperCase() + city.slice(1);
    console.log(result);
    if (liveTemp.innerHTML === "undefined") {
      alert("Oops Something Went Wrong ! Please try Later");
    }
  } catch (error) {
    console.error(error);
  }
}
fetchWeather("Gujrat");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  fetchWeather(searchBar.value);
});
const dropDownitems = document.querySelectorAll('.dropdown-menu li a ')
dropDownitems.forEach(item => {
  item.addEventListener('click', event => {
    // Prevent the default link behavior
    event.preventDefault();
    const clickedNavItem = event.target.textContent;
    fetchWeather(clickedNavItem);
    console.log(clickedNavItem);
  });
});
