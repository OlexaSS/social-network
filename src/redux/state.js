let store = {
    _state : {

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
        
    },
    getState(){
        return this._state;
    },
    _callSubscriber(){
        console.log('changed');
    },
    addPost () {
        let newPost = {
            id: 5,
            post: this._state.profilePage.newPostText,
            likes: 0
        };

        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },

    //отлавливаем каждый символ тексареи
    updateNewPostText (newText) {

        this._state.profilePage.newPostText = newText;
        //перерисовываем все дерево
        this._callSubscriber(this._state);

    },

    subscribe (observer) {
        this._callSubscriber = observer;
    }
}

    window.state = store;

  export default store;