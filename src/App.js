import React from "react";
import Weather from "./Weather";
import "./App.css";
import WebFont from "webfontloader";
import Sky from "./images/Cloud.mp4";

export default function App() {
  WebFont.load({
    google: {
      families: ["Dosis"],
    },
  });

  return (
    <div className="App">
      <Weather defaultCity="Tokyo" />
      <video autoPlay loop muted id="video">
        <source src={Sky} type="video/mp4" />
      </video>
      <div className="container">
        <footer>
          <a
            href="https://github.com/mcorreira/react-weather-app.git "
            target="_blank"
            rel="noopener noreferrer"
          >
            Open-source code
          </a>
          , by Megan Correira
        </footer>
      </div>
    </div>
  );
}
