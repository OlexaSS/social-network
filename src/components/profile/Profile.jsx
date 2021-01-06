import React from "react";
import image from '../../assets/images/main-img.jpg';
import MyPosts from "./myPosts/MyPosts";
import s from "./Profile.module.css";

const Profile = () => {
    return (
        <div>
            <div className={s.wrapper}>
                <img className={s.img} src={image} alt=""/>
            </div>
            <div className={s.content__inner}>
                <div className={s.content__ava}>ava</div>
                <div className={s.content__descr}>descr</div>
                <MyPosts />
            </div>
        </div>
    );
}

export default Profile;