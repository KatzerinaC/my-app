import React from "react";
import axios from "axios";

export default function Weather(props) {
  function handleResponse(response) {
    alert(
      `The weather in ${response.data.name} is ${response.data.main.temp}°C`
    );
  }

  let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=2d8109094a556b1a2d3b7008b88423cf&units=metric`;
  axios.get(url).then(handleResponse);
  return <h2>
Hello from Berlin!
  </h2>
};


