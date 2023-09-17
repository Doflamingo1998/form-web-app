import React from "react";
import { connect } from "react-redux";
import {
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import "./App.css";
import Login from "./pages/auth";
import Home from "./pages/home";
import Register from "./pages/register";
import ChangePass from "./pages/changePass";

const App = ({ isAuthenticated }) => {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          {isAuthenticated ? <Redirect to="/dashboard" /> : <Login />}
        </Route>
        <Route exact path="/">
          {isAuthenticated ? <Home /> : <Redirect to="/login" />}
        </Route>
        <Route path="/dashboard">
          {isAuthenticated ? <Home /> : <Redirect to="/login" />}
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/change-password">
          {isAuthenticated ? <ChangePass /> : <Redirect to="/login" />}
        </Route>
      </Switch>
    </Router>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(App);
