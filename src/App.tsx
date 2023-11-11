import React from 'react';
import {KabzdaMonday} from './components/kabzda-monday/KabzdaMonday';

const App = () => {
    console.log('APP');

    return (
        <div className="App">
            {/*<Kabzda0/>*/}
            <KabzdaMonday h1={'Monday 4'} address={'Somova'}/>
        </div>
    );
};

export default App;
