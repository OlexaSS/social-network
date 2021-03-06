import React from "react";
import { NavLink } from "react-router-dom";
import s from "./DialogItem.module.css";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <div className={s.item}>
            {/* навлинком задаем новый урл для Роута в апп.джс*/}
            <NavLink activeClassName={s.active} to={path}>{props.name}</NavLink>
        </div>
    );
}


export default DialogItem;