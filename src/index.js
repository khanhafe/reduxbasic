import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import Reducer from "./store/reducer";

import App from "./App";

const store = createStore(Reducer);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
