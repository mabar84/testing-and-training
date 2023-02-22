import React from 'react';
import './App.css';
import {LearnUseState} from "./learn/LearnUseState";
import {LearnUseEffect} from "./learn/LearnUseEffect";

function App() {
    console.log('App')

    return (
    <div className="App">
      <header className="App-header">
        {/*<LearnUseState/>*/}
        <LearnUseEffect/>

      </header>
    </div>
  );
}

export default App;
