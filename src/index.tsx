import React from "react";
import ReactDOM from "react-dom";

import GlobalStyles from "components/global-styles";
import Router from "./router";

ReactDOM.render(
  <React.StrictMode>
    <Router />
    <GlobalStyles />
  </React.StrictMode>,
  document.getElementById("root")
);
