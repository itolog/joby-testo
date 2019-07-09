import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { rootStore as store } from "./store";
import "./index.css";
import App from "./containers/App";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root") as HTMLElement
);
