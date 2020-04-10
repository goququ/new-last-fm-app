import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Albums from "@screens/albums";
import Artists from "@screens/artists";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/artists" component={Artists} />
        <Route path="/albums" component={Albums} />
        <Redirect to="/artists" />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
