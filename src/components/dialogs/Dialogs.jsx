import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./dialogItem/DialogItem";
import Message from "./message/Message";

const Dialogs = (props) => {

    // На основе входящего массива получаем jsx элементы и отрисовываем их
    let dialogItems = props.dialogs.map(
        d => <DialogItem name={d.name} id={d.id} />
    );

    let messageItems = props.messages.map(
        m => <Message message={m.message} />
    );
//////////////////////////////////////////////////////////////////////////
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs__items}>
                {dialogItems}   {/*отрисовываем jsx элементы из нового массива */}
            </div>
            <div className={s.messages}>
                {messageItems}
            </div>
        </div>
    );
}

export default Dialogs;