import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [weather, setWeather] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function displayWeather(response) {
    setWeather({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      date: new Date(response.data.dt * 1000),
      sky: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      pressure: response.data.main.pressure,
      city: response.data.name,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "8cac06f7ab6c10287cd06a316ff84a57";

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  if (weather.ready) {
    return (
      <div className="Search font-loader">
        <div className="container">
          <section className="jumbotron text-center">
            <h1 className="jumbotron heading">Weather Where You Are</h1>
            <form onSubmit={handleSubmit} className="mb-3">
              <div className="d-flex bd-highlight mb-3 justify-content-center">
                <input
                  type="search"
                  className="form-control"
                  autoComplete="off"
                  placeholder="Enter City Name:"
                  autoFocus="on"
                  onChange={updateCity}
                />
              </div>
              <div className="d-grid gap-2 d-md-flex justify-content-md-center">
                <button className="btn w-30 btn-primary" type="submit" value="Search">
                  Search
                </button>
                <button
                  className="btn w-40"
                  type="submit"
                  value="Current Location"
                >
                  Current Location
                </button>
              </div>
            </form>
            <WeatherInfo data={weather} />
            <WeatherForecast coordinates={weather.coordinates} />
          </section>
        </div>
      </div>
    );
  } else {
    search();

    return "Loading...";
  }
}
