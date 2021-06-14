import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./navbar";
export default function Movieselect() {
  return (
    <div>
      <Route path="/Navbar" component={Navbar} />
    </div>
  );
}
