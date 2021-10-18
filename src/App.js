import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Users from './features/users/Users'

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
        <Switch>
          <Route path="/home">
            {/* <Home /> */}
            <Users/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
 
export default App;
