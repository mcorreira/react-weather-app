import React, { useState } from "react";
import axios from "axios";

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
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              className="form-control"
              autocomplete="off"
              placeholder="Enter City Name:"
              onChange={updateCity}
            />
            <input className="btn w-30" type="submit" value="Search" />
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
        <form className="mb-3">
          <div className="row">
            {/*<div className="d-flex bd-highlight mb-3 justify-content-center"></div>
                  <div className="d-grid gap-2 d-md-flex justify-content-md-center">
                    <button className="btn w-30" type="submit">
                    Search
                  </button>
                  <button
                    className="btn w-40"
                    type="Submit"
                    
                  >
                    Current Location
    </button> 
                  </div>*/}
          </div>
        </form>
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
