import React, { useState } from "react";
import { connect } from "react-redux";
import { loginUser } from "../../redux/actions/authActions";
import "./Login.css";
import { NavLink } from "react-router-dom";

const Login = ({ loginUser }) => {
  const [email, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    loginUser({ email, password });
  };
  return (
    <div className="container">
      <div className="screen">
        <div className="screen__content">
          <form className="login">
            <div className="login__field">
              <i className="login__icon fas fa-user"></i>
              <input
                type="text"
                className="login__input"
                placeholder="User name / Email"
                value={email}
                onChange={handleUsernameChange}
              />
            </div>
            <div className="login__field">
              <i className="login__icon fas fa-lock"></i>
              <input
                type="password"
                className="login__input"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <button className="button login__submit" onClick={handleLogin}>
              <span className="button__text">Log In Now</span>
              <i className="button__icon fas fa-chevron-right"></i>
            </button>
            <div>Have no account? <NavLink to="/register">Register</NavLink></div>
          </form>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  loginUser
};

export default connect(null, mapDispatchToProps)(Login);
