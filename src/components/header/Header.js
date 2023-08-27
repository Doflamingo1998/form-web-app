import React, {useState} from "react";
import { connect } from "react-redux";
import "./Header.css";
import HeaderMenu from "../headerMenu";


const Header = ({ userName }) => {

  return (
    <header className="header">
      <div className="user-info">
        {userName ? `Welcome, ${userName}` : "Welcome"}
      </div>
      <HeaderMenu />
    </header>
  );
};

const mapStateToProps = (state) => ({
  userName: state.auth.user.name
});

export default connect(mapStateToProps)(Header);
