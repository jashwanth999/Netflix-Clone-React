import { useEffect, useState } from "react";
import Home from "./Home";
import MovieDetails from "./MovieDetails";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Recommend from "./Recommend";
export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          path="/MovieDetails/:id/:backdroppath/:moviename"
          component={MovieDetails}
        />
        <Route
          path="/recommend/:id/:backdroppath/:moviename"
          component={Recommend}
        />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}
