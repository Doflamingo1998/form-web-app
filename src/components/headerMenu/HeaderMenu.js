import React, { useState } from "react";
import Logout from "../../pages/logout";
import './HeaderMenu.css';

const HeaderMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLogoutOpen, setIsLogoutOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        console.log("closeMenu before update isMenuOpen: ", isMenuOpen);
        console.log("closeMenu before update isLogoutOpen: ", isLogoutOpen); setIsMenuOpen(false);
        setIsLogoutOpen(true);
        console.log("closeMenu after update isMenuOpen: ", isMenuOpen);
        console.log("closeMenu after update isLogoutOpen: ", isLogoutOpen);
    };

    const closeLogout = () => {
        setIsLogoutOpen(false);
    };

    return (
        <div className={`dropdown ${isMenuOpen ? 'active' : ''}`}>
            <div className="menu-icon" onClick={toggleMenu}>
                {isMenuOpen ? (
                    <img src="/icon/icon-menu-close.svg" alt="Closed Menu" />
                ) : (
                    <img src="/icon/icon-menu.svg" className="icon-2" alt="Open Menu" />
                )}
            </div>
            {isMenuOpen && (
                <div className="dropdown-content">
                    <div><Logout isLogoutOpen={isLogoutOpen} onCloseMenu={closeMenu} onCloseLogout={closeLogout} /></div>
                    <div>Mục 2</div>
                    <div>Mục 3</div>
                </div>
            )}
        </div>
    );
};

export default HeaderMenu;