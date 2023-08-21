import React, { useState } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loginUser } from "../../redux/actions/authActions";
import "./Login.css";

const Login = ({ loginUser, isAuthenticated }) => {
  const [email, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      await loginUser({ email, password });
      if (!isAuthenticated) {
        toast.error("Login failed. Please check your credentials.", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true
        });
      }
    } catch (error) {
      toast.error("An error occurred while logging in.", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      });
    }
  };
  return (
    <div className="container">
      <ToastContainer />
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
            <div>
              Have no account? <NavLink to="/register">Register</NavLink>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.isAuthenticated
});

const mapDispatchToProps = {
  loginUser
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
