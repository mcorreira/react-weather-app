import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

export default function Search() {
  const [city, setCity] = useState(" ");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      date: "Monday 11:30",
      sky: response.data.weather[0].description,
      imgUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      pressure: response.data.main.pressure,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "094780c710fa4efd669f0df8c3991927";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <div className="Search">
      <div className="container">
        <section className="jumbotron text-center">
          <h1 className="jumbotron heading">Weather Where You Are</h1>
          <form onSubmit={handleSubmit} className="mb-3">
            <div className="d-flex bd-highlight mb-3 justify-content-center">
              <input
                type="search"
                className="form-control"
                autocomplete="off"
                placeholder="Enter City Name:"
                autofocus="on"
                onChange={updateCity}
              />
            </div>
            <div className="d-grid gap-2 d-md-flex justify-content-md-center">
              <button className="btn w-30" type="submit" value="Search">
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
        </section>
      </div>
    </div>
  );

  if (loaded) {
    return (
      <div className="weather-app">
        {form}
        <h6>
          Last updated: <span>{weather.date}</span>
        </h6>

        <div className="weather-app-wrapper">
          <div className="overview">
            <h2>{city}</h2>
            <div className="row">
              <div className="col-6">
                <div className="d-flex flex-row weather-temperature">
                  <img src={weather.imgUrl} alt={weather.sky} />
                  <strong>{Math.round(weather.temperature)}</strong>
                  <span className="units">
                    <a href="/" className="active">
                      {" "}
                      °C
                    </a>
                    {"  "}|{" "}
                    <a href="/" className="active">
                      {" "}
                      °F
                    </a>
                  </span>
                </div>
              </div>
              <div className="col-6">
                <ul>
                  <li>
                    <strong>Sky: {weather.sky}</strong>
                    <span></span>
                  </li>
                  <li>
                    <strong>Humidty: {weather.humidity}</strong> <span></span>%
                  </li>
                  <li>
                    <strong>Pressure: {weather.pressure}</strong>
                    <span> </span> kPa{" "}
                  </li>
                  <li>
                    <strong>Wind: {weather.wind}</strong>
                    <span></span> km/h
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return form;
  }
}
