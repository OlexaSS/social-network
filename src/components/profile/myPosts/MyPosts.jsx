import React from "react";
import s from "./MyPosts.module.css";
import Post from "./post/Post";

const MyPosts = (props) => {
    let postsData = [
        {id : 1, post : 'Первый пост', likes: 11},
        {id : 2, post : 'второй пост', likes: 333},
        {id : 3, post : 'второй пост', likes: 10},
        {id : 4, post : 'второй пост', likes: 1},
        {id : 5, post : 'второй пост', likes: 12}
    ];

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
                <Post message={postsData[0].post} likesCount={postsData[0].likes} />
                <Post message={postsData[1].post} likesCount={postsData[1].likes} />
                <Post message={postsData[2].post} likesCount={postsData[2].likes} />
            </div>
        </div>
    );

}

export default MyPosts;