import React from 'react';
import {KabzdaMonday} from './components/kabzda-monday/KabzdaMonday';
import {KabzdaTuesday} from './components/kabzda-tuesday/KabzdaTuesday';
import {Tuesday4} from './tuesday-native-js/Tuesday4';
import Wednesday from './components/kabzda-wednesday/wednesday';

const App = () => {
    console.log('APP');

    return (
        <div className="App">
            {/*<Kabzda0/>*/}
            {/*<KabzdaMonday h1={'Monday 4'} address={'Somova'}/>*/}
            {/*<KabzdaTuesday/>*/}
            {/*<Tuesday4/>*/}
            <Wednesday/>
        </div>
    );
};

export default App;
