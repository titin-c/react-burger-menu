import React from "react";
import ReactDOM from "react-dom/client";

import App from "./components/App";
// styles

import "./styles/_style.scss";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
