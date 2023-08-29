import React, { useState, useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { registerUser } from "../../redux/actions/authActions";
import './Register.css';
import { useHistory } from 'react-router-dom'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserRole from "../../constants/userRoles";

const Register = ({ registerUser }) => {
  const [name, setUsername] = useState("");
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState("");
  const { isRegisteredSuccess } = useSelector((state) => state.auth);

  const history = useHistory();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const isNameValid = (name) => {
    const nameRegex = /^[a-zA-Z0-9_.-]*$/;
    return nameRegex.test(name);
  };

  const isEmailValid = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };

  const isPasswordValid = (password) => {
    const passwordRegex = /^[a-zA-Z0-9_.-]*$/;
    return passwordRegex.test(password);
  };

  const handleRegister = async (event) => {
    event.preventDefault();
    if (!isNameValid(name)) {
      toast.error("Tên không hợp lệ", {autoClose: 3000 });
    }

    if (!isEmailValid(email)) {
      toast.error("Vui lòng nhập email hợp lệ!", { autoClose: 3000 });
      return;
    }

    if (!isPasswordValid(password)) {
      toast.error("Mật khẩu không hợp lệ!", { autoClose: 3000 });
      return;
    }
    
    try {
      await registerUser({ email, password, name, role: UserRole.USER });
    } catch (error) {
      toast.error(`Register failed. Error: ${error}`, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      });
    }
  };

  useEffect(() => {
    if (isRegisteredSuccess) {
      toast.success("Đăng ký thành công", {autoClose: 2000});
      setTimeout(() => {
        history.push('/login');
      }, 3000);
    }
  }, [isRegisteredSuccess]);

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
