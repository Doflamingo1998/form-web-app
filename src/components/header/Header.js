import React from "react";
import { connect } from "react-redux";
import "./Header.css";
import { logoutUser } from "../../redux/actions/authActions"


const Header = ({ userName, logoutUser }) => {
  const handleLogout = () => {
    logoutUser();
  }

  return (
    <header className="header">
      <div className="user-info">
        {userName ? `Welcome, ${userName}` : "Welcome"}
        <button className="btn" onClick={handleLogout}>LOG OUT</button>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => ({
  userName: state.auth.user.name
});

export default connect(mapStateToProps, { logoutUser })(Header);
