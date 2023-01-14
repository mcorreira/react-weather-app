import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import "./Forecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function displayWeather(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    console.log(forecast);
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <div className="ForecastDay">{forecast[0].dt}</div>
            <WeatherIcon code={forecast[0].weather[0].icon} size={14} />
            <div className="ForecastTemps">
              <span className="ForecastMax">{forecast[0].temp.max}°</span>
              <span className="ForecastMin">{forecast[0].temp.min}°</span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "a710bd8bd76400c9658ef649d9e81728";
    let lon = props.coord.lon;
    let lat = props.coord.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=alerts&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(displayWeather);

    return null;
  }
}
