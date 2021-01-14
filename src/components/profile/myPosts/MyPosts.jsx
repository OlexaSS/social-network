import React from "react";
import s from "./MyPosts.module.css";
import Post from "./post/Post";

// На основе входящего массива получаем jsx элементы и отрисовываем их
const MyPosts = (props) => {
    
    
    let postElement = props.posts.map( 
            p => <Post message={p.post} likesCount={p.likes} />
        );

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
                {postElement}   {/*отрисовываем jsx элементы из нового массива */}
            </div>
        </div>
    );

}

export default MyPosts;