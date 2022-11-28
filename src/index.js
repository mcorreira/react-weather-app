import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <footer>
      <a
        href="https://github.com/mcorreira/react-weather-app.git"
        target="_blank"
      >
        Open-source code
      </a>
      , by Megan Correira
    </footer>
  </React.StrictMode>
);

reportWebVitals();
