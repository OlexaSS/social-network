import React from "react";
import image from '../../../assets/images/main-img.jpg';
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return (
        <div>
            <div className={s.wrapper}>
                <img className={s.img} src={image} alt=""/>
            </div>
            <div className={s.content__inner}>
                <div className={s.content__ava}>Ава</div>
                <div className={s.content__descr}>описание</div>
            </div>
        </div>
    );
}

export default ProfileInfo;