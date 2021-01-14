import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
  {id : 1, post : 'Первый пост', likes: 11},
  {id : 2, post : 'второй пост', likes: 333},
  {id : 3, post : 'второй пост', likes: 10},
  {id : 4, post : 'второй пост', likes: 1},
  {id : 5, post : 'второй пост', likes: 12}
];

let dialogs = [
  { id: 1, name: 'Olexa' },
  { id: 2, name: 'Vadim' },
  { id: 3, name: 'Vasya' },
  { id: 4, name: 'Petya' },
  { id: 5, name: 'Olga' }
];

let messages = [
  { id: 1, message: 'Привет!!!' },
  { id: 2, message: 'Уль ля ля' },
  { id: 3, message: 'Yo' },
  { id: 4, message: 'Yo' },
  { id: 5, message: 'gggg' }
];

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
