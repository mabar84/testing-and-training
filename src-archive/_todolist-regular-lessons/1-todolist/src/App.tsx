import React from 'react';
import './App.css';
import {Todolist} from "./todolist/Todolist";

function App() {

    const tasks1 = [
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "ReactJS", isDone: false},
        {id: 4, title: "asd", isDone: true}
    ]
    const tasks2 = [
        {id: 1, title: "Hello world", isDone: true},
        {id: 2, title: "I am Happy", isDone: false},
        {id: 3, title: "Yo", isDone: false}
    ]

    const title1 = 'dsjgfdhsg dfhg kdfjhg dfkjhg dfkjh gjdfk hgkjdfh gkjdfh gh'
    const title2 = 'dsewr34535345 456 546 54 6gjdfk hgkjdfh gkjdfh gh'
    return (
        <div className="App">
            <Todolist title={title1} tasks={tasks1}/>
            <Todolist title={title2} tasks={tasks2}/>
        </div>
    );
}

export default App;
