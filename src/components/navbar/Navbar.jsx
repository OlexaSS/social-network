import React from "react";
import s from "./Navbar.module.css";

const Navbar = () => {
    return (
        <nav className={s.navbar}>
            <ul className={s.list}>
                <li className={`${s.list__item} ${s.active}`}><a href="/profile">Profile</a></li>
                <li className={s.list__item}><a href="/dialogs">Messages</a></li>
                <li className={s.list__item}><a href="/news">News</a></li>
                <li className={s.list__item}><a href="/music">Music</a></li>
                <li className={s.list__item}><a href="/settings">Settings</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;