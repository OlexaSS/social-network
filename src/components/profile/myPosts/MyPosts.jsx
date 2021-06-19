import React from "react";
import s from "./MyPosts.module.css";
import Post from "./post/Post";

// На основе входящего массива получаем jsx элементы и отрисовываем их
const MyPosts = (props) => {
    
    
    let postElements = props.posts.map( 
            p => <Post message={p.post} likesCount={p.likes} />
        );

    let newPostElement = React.createRef(); //создаем пустую ссылку для тексареи
    

    let addPost = () =>{
        let text = newPostElement.current.value;
        props.addPost(text);
        newPostElement.current.value = '';
    }

    return (
        <div className={s.posts}>
            <div>
                <textarea rows="10" cols="40" ref={newPostElement}></textarea> {/*привязываем елемент к пустой ссылке*/}
            </div>
            <button className={s.form__btn} onClick={ addPost }>Опубликовать</button>
            <div className={s.post__arhives}>
                <h3>Опубликованные</h3>
                {postElements}   {/*отрисовываем jsx элементы из нового массива */}
            </div>
        </div>
    );

}

export default MyPosts;