import React from "react";
import s from "./Dialogs.module.css";

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs__items}>
                <div className={s.item + ' ' + s.active}>
                    Olexa
                </div>
                <div className={s.item}>
                    Vadim
                </div>
                <div className={s.item}>
                    Vasya
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