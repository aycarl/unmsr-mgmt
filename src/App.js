import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  //Redirect,
} from "react-router-dom";

import Home from './components/home';
import Dashboard from './components/dashboard'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/home" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
