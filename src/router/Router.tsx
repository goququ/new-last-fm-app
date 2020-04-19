import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

// import Albums from "screens/albums";
import Artists from "screens/artists";
import Home from "screens/home";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/artists" component={Artists} />
        {/* <Route path="/albums" component={Albums} /> */}
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
