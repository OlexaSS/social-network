import React from "react";
import s from "./MyPosts.module.css";
import Post from "./post/Post";

const MyPosts = (props) => {
    return (
        <div className={s.posts}>
            <div>
                <textarea></textarea>
                <button>Add post</button>

            </div>
            <div className={s.posts}>
                <Post message="First post" likesCount="3333"/>
                <Post message="Second post" likesCount="0"/>
            </div>
        </div>
    );

}

export default MyPosts;