import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs__items}>
                <div className={s.item}>
                    <NavLink activeClassName={s.active} to="/dialogs/1">Olexa</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink activeClassName={s.active} to="/dialogs/2">Vadim</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink activeClassName={s.active} to="/dialogs/3">Vasya</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>Hello</div>
                <div className={s.message}>Yo</div>
            </div>
        </div>
    );
}

export default Dialogs;