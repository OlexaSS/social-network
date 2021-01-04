import React from "react";

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar__list">
                <li className="navbar__list-item"><a href="#">Profile</a></li>
                <li className="navbar__list-item"><a href="#">Messages</a></li>
                <li className="navbar__list-item"><a href="#">News</a></li>
                <li className="navbar__list-item"><a href="#">Music</a></li>
                <li className="navbar__list-item"><a href="#">Settings</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;