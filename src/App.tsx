import React from 'react';

import './App.css';
import {useAppSelector} from './hooks/hooks';
import {Todos} from './components/Todos';


function App() {
    const todos = useAppSelector(state => state.todolists)
    console.log(todos)
    return (
        <div className="App">
            {
                todos.map(tl => (
                    <Todos
                        key={tl.id}
                        todosID={tl.id} title={tl.title} filter={tl.filter}
                    />
                ))
            }

        </div>
    );
}

export default App;
