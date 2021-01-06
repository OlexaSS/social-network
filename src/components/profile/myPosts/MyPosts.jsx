import React from "react";
import s from "./MyPosts.module.css";
import Post from "./post/Post";

const MyPosts = (props) => {
    return (
        <div className={s.posts}>
            <form>
                <div>
                    <textarea rows="10" cols="40"></textarea>
                </div>
                <button className={s.form__btn}>Опубликовать</button>
            </form>
            <div className={s.post__arhives}>
                <h3>Опубликованные</h3>
                <Post message="Первый пост" likesCount="3333" />
                <Post message="второй пост" likesCount="0" />
            </div>
        </div>
    );

}

export default MyPosts;