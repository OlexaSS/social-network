import React from "react";
import s from "./Post.module.css";
import image from "../../../../assets/images/ava-1.jfif"

const Post = (props) => {
    return (
        <div className={s.singlePost}>
            <img src={image} />
            <div className={s.content}>
                {props.message}
            </div>
            <div className={s.like}>
                <div className={s.heart} id="heart">
                </div>
                <div className={s.hidden} id="hidden">
                    Нравится! 
                </div>
                <div className={s.likesCount}>
                {props.likesCount}
                </div>
            </div>
        </div>
    );

}

export default Post;