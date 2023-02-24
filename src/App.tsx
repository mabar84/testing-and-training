import React from 'react';
import './App.css';
import {LearnUseState} from "./learn/LearnUseState";
import {LearnUseEffectSetTimeoutSetInterval} from "./learn/LearnUseEffectSetTimeoutSetInterval";
import {Clock} from "./learn/Clock";

function App() {
    console.log('App')

    return (
        <div className="App">
            <header className="App-header">
                <Clock/>
            </header>
        </div>
    );
}

export default App;
