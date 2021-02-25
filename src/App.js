import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Home from "./components/home";

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
