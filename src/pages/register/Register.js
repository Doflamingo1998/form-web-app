import React, { useState } from "react";
import { connect } from "react-redux";
import { registerUser } from "../../redux/actions/authActions";
import './Register.css';
import { ToastContainer } from "react-toastify";


const Register = ({ registerUser }) => {
  const [name, setUsername] = useState("");
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleRegister = (event) => {
    event.preventDefault();
    registerUser({ email, password, name, role: 2 });
  };

  return (
    <div className="container">
      <ToastContainer />
      <div className="screen">
        <div className="screen__content">
          <form className="register" >
            <div>
              <input
                type="text"
                placeholder="User name"
                className="register-input"
                value={name}
                onChange={handleUsernameChange}
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                className="register-input"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div >
              <input
                type="password"
                placeholder="Password"
                className="register-input"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <button className="register-button" onClick={handleRegister} >
              REGISTER
            </button>
          </form>
        </div>
      </div>
    </div>

  );
};

const mapDispatchToProps = {
  registerUser
};


export default connect(null, mapDispatchToProps)(Register);
