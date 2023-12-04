import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import DeviseContextProvider from "./shared/components/Context/DeviseContext";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DeviseContextProvider>
      <App />
    </DeviseContextProvider>
  </React.StrictMode>
);
