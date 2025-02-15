import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { InfluenceProvider } from "../context/influenceContext.jsx";
import { BrandProvider } from "../context/brandContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>

  <BrandProvider>
    <InfluenceProvider>
      <App />
    </InfluenceProvider>
  </BrandProvider>

  // </React.StrictMode>
);
