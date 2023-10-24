import React from 'react';
import {KabzdaMonday} from './components/kabzda-monday/KabzdaMonday';

const App = () => {
    console.log('APP');

    return (
        <div className="App">
            {/*<Selfeducation/>*/}
            {/*<Kabzda0/>*/}
            <KabzdaMonday h1={'Monday 3'}/>
        </div>
    );
};

export default App;
