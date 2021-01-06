import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <div className={s.item}>
            <NavLink activeClassName={s.active} to={path}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {

    return (
        <div className={s.message}>{props.content}</div>
    );
    
}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs__items}>
                <DialogItem name="Olexa" id="1"/>
                <DialogItem name="Vadim" id="2"/>
                <DialogItem name="Vasya" id="3"/>
            </div>
            <div className={s.messages}>
                <Message content = "Привет!!!"/>
                <Message content = "Уль ля ля"/>
                <Message content = "Yo"/>
            </div>
        </div>
    );
}

export default Dialogs;