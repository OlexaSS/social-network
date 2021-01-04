import React from "react";
import image from '../../assets/images/main-img.jpg';
import s from "./Profile.module.css";

const Profile = () => {
    return (
        <div className={s.content}>
            <div className={s.wrapper}>
                <img className={s.img} src={image} alt=""/>
            </div>
            <div className={s.content__inner}>
                <div className={s.content__ava}>ava</div>
                <div className={s.content__descr}>descr</div>
            </div>
            <div className={s.posts}>
                My posts
					<div className={s.new__post}>
                    new post
					</div>
                <div>
                    post 1
					</div>
                <div>
                    post 2
					</div>
            </div>
        </div>
    );
}

export default Profile;