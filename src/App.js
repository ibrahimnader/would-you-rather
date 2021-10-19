import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import PrivateRoute from "./components/PrivateRoute";
import Navbar from "./components/Navbar";
import Login from './features/users/Login'
import Home from "./features/questions/Home";
import Add from "./features/questions/Add";
import Question from "./features/questions/Question";
import LeaderBoard from "./features/users/LeaderBoard";
function App() {
  return (
    <div className="App bg-light " style={{minHeight:"100vh"}}>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute exact path="/home">
           <Home/>
          </PrivateRoute>
          <PrivateRoute path="/add">
            <Add />
          </PrivateRoute>
          <PrivateRoute exact path="/questions/:id">
          <Question />
          </PrivateRoute>
          <PrivateRoute path="/leadrboard">
            <LeaderBoard />
          </PrivateRoute>
         
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
