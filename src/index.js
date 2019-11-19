import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import React from "react";
import App from "./App";
import configureStore from "./redux/store/configureStore";

import "./index.css";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root") || document.createElement("div") // for testing purposes
);
