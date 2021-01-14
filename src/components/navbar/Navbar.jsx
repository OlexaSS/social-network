import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css";

const Navbar = () => {
    return (
        <nav className={s.navbar}>
            <ul className={s.list}>
                {/* навлинком задаем новый урл для Роута в апп.джс*/}
                <li className={s.list__item}><NavLink activeClassName={s.active} to="/profile">Профиль</NavLink></li>
                <li className={s.list__item}><NavLink activeClassName={s.active}  to="/dialogs">Сообщения</NavLink></li>
                <li className={s.list__item}><NavLink activeClassName={s.active} to="/news">Новости</NavLink></li>
                <li className={s.list__item}><NavLink activeClassName={s.active} to="/music">Музыка</NavLink></li>
                <li className={s.list__item}><NavLink activeClassName={s.active} to="/settings">Настройки</NavLink></li>
            </ul>
        </nav>
    );
}

export default Navbar;