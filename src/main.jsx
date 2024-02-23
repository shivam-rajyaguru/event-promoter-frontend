import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { InfluenceProvider } from "../context/influenceContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <InfluenceProvider>
      <App />
    </InfluenceProvider>
  </React.StrictMode>
);
