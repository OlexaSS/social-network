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
        <div className={s.message}>{props.message}</div>
    );
    
}

const Dialogs = (props) => {

    let dialogsData = [
        {id : 1, name : 'Olexa'},
        {id : 2, name : 'Vadim'},
        {id : 3, name : 'Vasya'},
        {id : 4, name : 'Petya'},
        {id : 5, name : 'Olga'}
    ];

    let messagesData = [
        {id : 1, message: 'Привет!!!'},
        {id : 2, message: 'Уль ля ля'},
        {id : 3, message: 'Yo'},
        {id : 4, message: 'Yo'},
        {id : 5, message: 'Yo'}
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs__items}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
            </div>
            <div className={s.messages}>
                <Message message = {messagesData[0].message} />
                <Message message = {messagesData[1].message} />
                <Message message = {messagesData[2].message} />
                <Message message = {messagesData[0].message} />
            </div>
        </div>
    );
}

export default Dialogs;