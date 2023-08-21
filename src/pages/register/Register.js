import React, { useState } from "react";
import { connect } from "react-redux";
import { registerUser } from "../../redux/actions/authActions";

// import { loginUser } from "../../redux/actions/authActions";


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
    registerUser({ email, password, name, role:2 });
  };

  return (
    <div className="container">
      <form >
        <div>
          <input
            type="text"

            placeholder="User name"
            value={name}
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          <input
            type="email"

            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div >
          <input
            type="password"

            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button onClick={handleRegister} >
          Register
        </button>
      </form>
    </div>

  );
};

const mapDispatchToProps = {
  registerUser
};


export default connect(null, mapDispatchToProps)(Register);
