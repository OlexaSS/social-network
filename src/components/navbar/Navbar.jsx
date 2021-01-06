import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css";

const Navbar = () => {
    return (
        <nav className={s.navbar}>
            <ul className={s.list}>
                <li className={s.list__item}><NavLink activeClassName={s.active} to="/profile">Profile</NavLink></li>
                <li className={s.list__item}><NavLink activeClassName={s.active}  to="/dialogs">Messages</NavLink></li>
                <li className={s.list__item}><NavLink activeClassName={s.active} to="/news">News</NavLink></li>
                <li className={s.list__item}><NavLink activeClassName={s.active} to="/music">Music</NavLink></li>
                <li className={s.list__item}><NavLink activeClassName={s.active} to="/settings">Settings</NavLink></li>
            </ul>
        </nav>
    );
}

export default Navbar;