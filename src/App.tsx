import React from 'react';
import './App.css';
import {Rating} from "./learn/Rating";
import {Accordion} from "./learn/Accordion";
import {ResetUseEffect} from "./learn/ResetUseEffect";

function App() {
    console.log('App')

    return (
        <div className="App">
            <header className="App-header">
                <ResetUseEffect/>
                {/*<Rating value={4} title={'RatingTitle'}/>*/}
                {/*<Accordion title={'First'} collapsed={true}/>*/}
                {/*<Accordion title={'Second'} collapsed={false}/>*/}
            </header>
        </div>
    );
}

export default App;
