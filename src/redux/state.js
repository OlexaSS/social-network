let rerenderEntireTree = ()=>{
    console.log('changed');
}
let state = {

    profilePage: {
        posts: [
            {id : 1, post : 'Первый пост', likes: 11},
            {id : 2, post : 'второй пост', likes: 333},
            {id : 3, post : 'второй пост', likes: 10},
            {id : 4, post : 'второй пост', likes: 1},
        ],
        newPostText: "введите сообщение"
        
    },

    dialogsPage: {
        messages: [
            { id: 1, message: 'Привет!!!' },
            { id: 2, message: 'Уль ля ля' },
            { id: 3, message: 'Yo' },
            { id: 4, message: 'Yo' },
            { id: 5, message: 'gggg' }
          ],
        dialogs: [
            { id: 1, name: 'Olexa' },
            { id: 2, name: 'Vadim' },
            { id: 3, name: 'Vasya' },
            { id: 4, name: 'Petya' },
            { id: 5, name: 'Olga' }
        ]
    }
    
};
window.state = state;
export const addPost = () => {
        let newPost = {
            id: 5,
            post: state.profilePage.newPostText,
            likes: 0
        };

        state.profilePage.posts.push(newPost);
        state.profilePage.newPostText = '';
        rerenderEntireTree(state);

    }

    //отлавливаем каждый символ тексареи
    export const updateNewPostText = (newText) => {

        state.profilePage.newPostText = newText;
        //перерисовываем все дерево
        rerenderEntireTree(state);

    }

    export const subscribe = (observer)=>{
        rerenderEntireTree = observer;
    }

  export default state;