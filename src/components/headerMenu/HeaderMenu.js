import React, { Fragment, useState } from "react";
import Modal from "react-modal";
import { connect } from "react-redux";
import Logout from "../../pages/logout";
import { logoutUser } from "../../redux/actions/authActions";
import './HeaderMenu.css';

const HeaderMenu = ({ logoutUser }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLogoutOpen, setIsLogoutOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
        setIsLogoutOpen(true);
    };

    const handleLogout = () => {
        logoutUser();
        closeModal();
    };

    const closeModal = () => {
        setIsLogoutOpen(false);
    };

    return (
        <Fragment>
            <div className={`dropdown ${isMenuOpen ? 'active' : ''}`}>
                <div className="menu-btn-2" onClick={toggleMenu}>
                    <span></span>
                </div>
                {isMenuOpen && (
                    <div className="dropdown-content">
                        <div><Logout onCloseMenu={closeMenu} /></div>
                        <div>Mục 2</div>
                        <div>Mục 3</div>
                    </div>
                )}
            </div>

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

const mapDispatchToProps = {
    logoutUser
};

export default connect(null, mapDispatchToProps)(HeaderMenu);