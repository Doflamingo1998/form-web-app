import React, { useState } from "react";
import './HeaderMenu.css';
import Logout from "../../pages/logout";

const HeaderMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className={`dropdown ${isMenuOpen ? 'active' : ''}`}>
            <div className="menu-icon" onClick={toggleMenu}>
                {isMenuOpen ? (
                    <img src="/icon/icon-menu-close.svg"  alt="Closed Menu" />
                ) : (
                    <img src="/icon/icon-menu.svg" className="icon-2" alt="Open Menu" />
                )}
            </div>
            {isMenuOpen && (
                <div className="dropdown-content">
                    <div><Logout /></div>
                    <div>Mục 2</div>
                    <div>Mục 3</div>
                </div>
            )}
        </div>
    );
};

export default HeaderMenu;