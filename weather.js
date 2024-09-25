const API_KEY = `14951c93f3d11e8ac8bed96dd90e8bc7`;

const searchTemperature = () => {
  const city = document.getElementById("city-name").value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayTemperature(data));
};

const setInnerText = (id, text) => {
  // console.log(id,text);
  document.getElementById(id).innerText = text;
};

const displayTemperature = (temperature) => {
  var day = document.getElementById("day");
  console.log(temperature);
  setInnerText("city", temperature.name);
  setInnerText("temp", temperature.main.temp);
  setInnerText("weather", temperature.weather[0].main);
  day.innerHTML = new Date().toLocaleDateString("en-US", {
    weekday: "long",
  });
  const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
  const imgIcon = document.getElementById("image-icon");
  imgIcon.setAttribute("src", url);
};
