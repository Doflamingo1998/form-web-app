import React, { Fragment } from "react";
import Modal from "react-modal";
import { connect } from "react-redux";
import { logoutUser } from "../../redux/actions/authActions";

const Logout = ({ logoutUser, onCloseMenu, isLogoutOpen, onCloseLogout }) => {
    const handleLogout = () => {
        logoutUser();
        closeModal();
    };

    const openModal = () => {
        onCloseMenu();
    };

    const closeModal = () => {
        onCloseLogout();
    };

    return (
        <Fragment>
            <div onClick={openModal}>Log out</div>
            <Modal
                isOpen={isLogoutOpen}
                onRequestClose={closeModal}
                ariaHideApp={false}
                className="modal"
                overlayClassName="overlay"
            >
                <div className="modal__close" onClick={closeModal}>
                    &times;
                </div>
                <h2 className="modal__title">Do you really want to log out?</h2>
                <div className="modal__buttons">
                    <button className="modal__button cancel" onClick={closeModal}>
                        No
                    </button>
                    <button className="modal__button submit" onClick={handleLogout}>
                        Yes
                    </button>
                </div>
            </Modal>
        </Fragment>
    );
};

export default connect(null, { logoutUser })(Logout);
