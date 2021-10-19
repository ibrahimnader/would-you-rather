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
          <PrivateRoute exact path="/">
           <Home/>
          </PrivateRoute>
          <PrivateRoute exact path="/add">
            <Add />
          </PrivateRoute>
          <PrivateRoute exact path="/questions/:id">
          <Question />
          </PrivateRoute>
          <PrivateRoute  exact path="/leadrboard">
            <LeaderBoard />
          </PrivateRoute>
          <Route path="*">
           <div className="mx-auto fs-1 text-danger mt-4">404 Page Not Found</div>
          </Route>
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
