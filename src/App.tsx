import React from 'react';
import './App.css';
import {ResetUseEffect} from "./learn/ResetUseEffect";

function App() {
    console.log('App')

    return (
        <div className="App">
            <header className="App-header">
                <ResetUseEffect/>
            </header>
        </div>
    );
}

export default App;
