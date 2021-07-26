import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from "./components/pages/home";
import Dashboard from "./components/pages/dashboard.tsx";
import Header from "./components/shared-components/header";
import Login from "./components/authentication-components/login.tsx";
import SignUp from "./components/authentication-components/signup.tsx";
import NewOrg from "./components/organization-components/new-organization";

import "./App.css";
import Organizations from "./components/pages/organizations";
import Events from "./components/pages/events";

let authToken = "0";

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
        <Route exact path="/organizations" component={Organizations} />
        <Route exact path="/events" component={Events} />
        <Route exact path="/new-org" component={NewOrg} />
      </Switch>
    </div>
  </Router>
);

const App = () => {
  return authToken ? appComponents : authComponents;
};

export default App;
