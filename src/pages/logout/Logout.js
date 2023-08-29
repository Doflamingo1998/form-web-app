import React, { Fragment } from "react";
import { connect } from "react-redux";

const Logout = ({ onCloseMenu }) => {
    const openModal = () => {
        onCloseMenu();
    };

    return (
        <Fragment>
            <div onClick={openModal}>Log out</div>
        </Fragment>
    );
};

export default connect(null, null)(Logout);
