import React, {useState} from 'react';
import './App.css';
import Button from './components/button/Button';
import Kros from './components/Kros';


function App() {


    const tasks = [
        {id: 1, title: 'HTML&CSS', isDone: true},
        {id: 2, title: 'JS', isDone: true},
        {id: 3, title: 'ReactJS', isDone: false}
    ]

    return (
        <div>
            <Button name={'red'} color={'red'}>Red</Button>
            <Button name={'default'}>Def</Button>
            <Button name={'disabled'}
                    disabled={true}
                    color={'secondary'}>Dis</Button>
            <hr/>
            <Kros tasks={tasks}>
                <Button name={'red'} color={'red'}>Red</Button>
                <Button name={'default'}>Def</Button>
                <p>23 34 terg dfg dfg dfg </p>
                <p>23 34 terg dfg dfg dfg </p>
                <p>23 34 terg dfg dfg dfg </p>
                <p>23 34 terg dfg dfg dfg </p>
                <input type="texttext"/>
                <input type="texttext"/>
                <p>23 34 terg dfg dfg dfg </p>
                <p>23 34 terg dfg dfg dfg </p>
                <p>23 34 terg dfg dfg dfg </p>
                <p>23 34 terg dfg dfg dfg </p>
            </Kros>
            <hr/>
            <Kros tasks={tasks}>
                <Button name={'red'} color={'red'}>Red</Button>
                <Button name={'default'}>Def</Button>
                <p>23 34 terg dfg dfg dfg </p>

            </Kros>
            <hr/>
            <Kros tasks={tasks}>
                <Button name={'red'} color={'red'}>Red</Button>
                <Button name={'default'}>Def</Button>

                <input type="texttext"/>
                <input type="texttext"/>

            </Kros>
        </div>
    );
}


export default App;
