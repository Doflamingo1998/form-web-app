import React from "react";
import { connect } from "react-redux";
import { logoutUser } from "../../redux/actions/authActions"
import './Logout.css';

const Logout = ({ logoutUser }) => {
    const handleLogout = () => {
      logoutUser();
    };

    return (
        <button className="btn" onClick={handleLogout}>
            LOG OUT
        </button>
    );
};

export default connect(null, { logoutUser })(Logout);
