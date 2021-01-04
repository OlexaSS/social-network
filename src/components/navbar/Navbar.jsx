import React from "react";
import s from "./Navbar.module.css";

const Navbar = () => {
    return (
        <nav className={s.navbar}>
            <ul className={s.list}>
                <li className={`${s.list__item} ${s.active}`}><a href="/">Profile</a></li>
                <li className={s.list__item}><a href="/">Messages</a></li>
                <li className={s.list__item}><a href="/">News</a></li>
                <li className={s.list__item}><a href="/">Music</a></li>
                <li className={s.list__item}><a href="/">Settings</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;