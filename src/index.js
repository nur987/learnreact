import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./components/app/app";

ReactDOM.render(
  <React.StrictMode>
    <StrictMode>
      <App />
    </StrictMode>
  </React.StrictMode>,
  document.getElementById("root")
);
