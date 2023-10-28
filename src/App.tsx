import React, {useEffect, useRef, useState} from 'react';
import './App.css';
import {json} from 'stream/consumers';
import {Button} from './components/Button';
import Input from './components/Input';
import FullInput from './components/FullInput';


type PropsType = {
    userId: number
    id: number
    title: string
    completed: boolean
}

function App() {

    console.log('app')

    // const [newTitle, setNewTitle] = useState('')

    // const inputRef = useRef<HTMLInputElement | null>(null)

    const [todos, setTodos] = useState<PropsType[]>([])

    const fetchFoo = () =>
        fetch('https://jsonplaceholder.typicode.com/todos/')
            .then(response => response.json())
            .then(json => setTodos(json))

    useEffect(() => {
        fetchFoo()
    }, [])

    // console.log(todos)

    const showHandler = () => fetchFoo()
    const hideHandler = () => setTodos([])


    const addTodo = (m: string) => {
        const newTodo: PropsType = {
            userId: 666,
            id: todos.length + 1,
            title: m,
            completed: false
        }
        setTodos([newTodo, ...todos])
    }

    return (
        <div className="App">
            <Button name={'Show'} onClick={showHandler}/>
            <Button name={'Hide'} onClick={hideHandler}/>


            <div>
                <FullInput buttonName={'addItem2'} onClick={addTodo}/>

                {/*<Input newTitle={newTitle} setNewTitle={setNewTitle}/>*/}
                {/*<Button name={'Add'} onClick={addTodo}/>*/}
            </div>

            <ul>
                {
                    todos.map(el => {
                        return (
                            <li key={el.id}>
                                <input type="checkbox" checked={el.completed}/>
                                <span>{el.title}</span> -
                                <span>{el.id}</span>
                            </li>
                        )
                    })
                }
            </ul>

        </div>
    );
}

export default App;

