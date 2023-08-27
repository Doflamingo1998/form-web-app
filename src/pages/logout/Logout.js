import React from "react";
import { connect } from "react-redux";
import { logoutUser } from "../../redux/actions/authActions";

const Logout = ({ logoutUser }) => {
    const handleLogout = () => {
      logoutUser();
    };

    return (
        <div className="btn" onClick={handleLogout}>
            LOG OUT
        </div>
    );
};

export default connect(null, { logoutUser })(Logout);
