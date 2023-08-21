import React from "react";
import { connect } from "react-redux";
import "./Header.css";

const Header = ({ userName }) => {
  return (
    <header className="header">
      <div className="user-info">
        {userName ? `Welcome, ${userName}` : "Welcome"}
      </div>
    </header>
  );
};

const mapStateToProps = (state) => ({
  userName: state.user.name
});

export default connect(mapStateToProps)(Header);
