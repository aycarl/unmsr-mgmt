import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from "./components/home";
import Dashboard from "./components/dashboard";
import Header from "./components/header";
import Login from "./components/login";
import SignUp from "./components/sign-up";

import "./App.css";

let authToken = "null";

const authComponents = (
  <Router>
    <div className="container">
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
      </Switch>
    </div>
  </Router>
);

const appComponents = (
  <Router>
    <div className="container">
      <Header />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/home" component={Home} />
      </Switch>
    </div>
  </Router>
);

const App = () => {
  return authToken ? appComponents : authComponents;
};

export default App;
