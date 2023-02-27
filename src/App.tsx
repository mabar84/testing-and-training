import React from 'react';
import './App.css';
import {ResetUseEffect} from "./learn/ResetUseEffect";
import {Rating} from "./learn/Rating";

function App() {
    console.log('App')

    return (
        <div className="App">
            <header className="App-header">
                <Rating/>
            </header>
        </div>
    );
}

export default App;
