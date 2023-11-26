import React from 'react';
import {KabzdaMonday} from './components/kabzda-monday/KabzdaMonday';
import {KabzdaTuesday} from './components/kabzda-tuesday/KabzdaTuesday';

const App = () => {
    console.log('APP');

    return (
        <div className="App">
            {/*<Kabzda0/>*/}
            {/*<KabzdaMonday h1={'Monday 4'} address={'Somova'}/>*/}
            <KabzdaTuesday/>
        </div>
    );
};

export default App;
