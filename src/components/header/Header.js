import React from "react";
import { connect } from "react-redux";
import "./Header.css";
import Logout from "../../pages/logout/Logout";

const Header = ({ userName }) => {


  return (
    <header className="header">
      <div className="user-info">
        {userName ? `Welcome, ${userName}` : "Welcome"}
        <Logout />
      </div>
    </header>
  );
};

const mapStateToProps = (state) => ({
  userName: state.auth.user.name
});

export default connect(mapStateToProps)(Header);
