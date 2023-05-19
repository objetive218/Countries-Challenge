import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { RegionProvider } from "./context/RegionContext";
import { CountryProvider } from "./context/CountryContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CountryProvider>
      <RegionProvider>
        <App />
      </RegionProvider>
    </CountryProvider>
  </React.StrictMode>
);
