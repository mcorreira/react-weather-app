import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
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
            <div className="col-12">
              <div className="d-flex flex-row weather-temperature">
                <div className="float-left">
                  <WeatherIcon
                    code={props.data.icon}
                    alt={props.data.sky}
                    size={100}
                  />
                  <div className="float-left">
                    <WeatherTemperature celsius={props.data.temperature} />
                  </div>
                </div>
                <div className="col-8">
                  <ul>
                    <li>
                      <strong className="text-capitalize sky">
                        Sky: {props.data.sky}
                      </strong>
                      <span></span>
                    </li>
                    <li>
                      <strong className="text-capitalize humidity">
                        Humidty: {props.data.humidity} <span></span>%
                      </strong>
                    </li>
                    <li>
                      <strong className="text-capitalize pressure">
                        Pressure: {props.data.pressure}
                        <span> </span> kPa{" "}
                      </strong>
                    </li>
                    <li>
                      <strong className="text-capitalize wind">
                        Wind: {props.data.wind}
                        <span></span> km/h{" "}
                      </strong>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
