import React from 'react';
import './App.css';
import {Selfeducation} from './components/selfeducation/Selfeducation';
import {Kabzda0} from './components/kabzda0/Kabzda0';
import {KabzdaMonday} from './components/kabzda-monday/KabzdaMonday';

const App = () => {
    console.log('APP');

    return (
        <div className="App">
            {/*<Selfeducation/>*/}
            {/*<Kabzda0/>*/}
            <KabzdaMonday/>
        </div>
    );
};

export default App;
