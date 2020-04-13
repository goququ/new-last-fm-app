import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import GlobalStyles from "components/global-styles";

import Router from "./router";
import store from "./store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
    <GlobalStyles />
  </React.StrictMode>,
  document.getElementById("root")
);
