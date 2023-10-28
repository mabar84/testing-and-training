import React from 'react';
import {KabzdaMonday} from './components/kabzda-monday/KabzdaMonday';
import {Selfeducation} from './components/selfeducation/Selfeducation';

const App = () => {
    console.log('APP');

    return (
        <div className="App">
            {/*<Selfeducation/>*/}
            {/*<Kabzda0/>*/}
            <KabzdaMonday h1={'Monday 3'} address={'Somova'}/>
        </div>
    );
};

export default App;
