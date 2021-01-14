import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./dialogItem/DialogItem";
import Message from "./message/Message";

const Dialogs = (props) => {

    let dialogs = [
        { id: 1, name: 'Olexa' },
        { id: 2, name: 'Vadim' },
        { id: 3, name: 'Vasya' },
        { id: 4, name: 'Petya' },
        { id: 5, name: 'Olga' }
    ];

    let messages = [
        { id: 1, message: 'Привет!!!' },
        { id: 2, message: 'Уль ля ля' },
        { id: 3, message: 'Yo' },
        { id: 4, message: 'Yo' },
        { id: 5, message: 'gggg' }
    ];

    // На основе входящего массива получаем jsx элементы и отрисовываем их
    let dialogItems = dialogs.map(
        d => <DialogItem name={d.name} id={d.id} />
    );

    let messageItems = messages.map(
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