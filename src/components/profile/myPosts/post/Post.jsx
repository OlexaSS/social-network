import React from "react";
import s from "./Post.module.css";
import image from "../../../../assets/images/ava-1.jfif"

const Post = () => {
    return (
        <div className={s.singlePost}>
            <img src={image} />
            <div className={s.content}>
                Post 1Post 1Post 1Post 1Post 1Post 1Post 1Post 1Post 1Post 1Post 1Post 1Post 1Post 1Post 1Post 1Post 1
            </div>
            <div className={s.like}>
                Like!
            </div>
        </div>
    );

}

export default Post;