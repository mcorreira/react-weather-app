import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeaatherInfo">
      <div className="weather-app-wrapper">
        <div className="overview">
          <h6>
            Last updated:{" "}
            <span>
              <FormattedDate date={props.data.date} />
            </span>
          </h6>
          <h2 className="text-capitalize">{props.data.city}</h2>
          <div className="row">
            <div className="col-6">
              <div className="d-flex flex-row weather-temperature">
                <img src={props.data.imgUrl} alt={props.data.sky} />
                <strong id="temp">{Math.round(props.data.temperature)}</strong>
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
                  <strong className="text-capitalize">
                    Sky: {props.data.sky}
                  </strong>
                  <span></span>
                </li>
                <li>
                  <strong>Humidty: {props.data.humidity}</strong> <span></span>%
                </li>
                <li>
                  <strong>Pressure: {props.data.pressure}</strong>
                  <span> </span> kPa{" "}
                </li>
                <li>
                  <strong>Wind: {props.data.wind}</strong>
                  <span></span> km/h
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
