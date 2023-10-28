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

    const [todos, setTodos] = useState<PropsType[]>([])
    const inputRef = useRef<HTMLInputElement>(null)

    const fetchFoo = () =>
        fetch('https://jsonplaceholder.typicode.com/todos/')
            .then(response => response.json())
            .then(json => setTodos(json))

    useEffect(() => {
        fetchFoo()
    }, [])

    const showHandler = () => fetchFoo()
    const hideHandler = () => setTodos([])

    const addTodo = () => {
        if (inputRef.current) {
            const newTodo: PropsType = {
                userId: 666,
                id: todos.length + 1,
                title: inputRef.current.value,
                completed: false
            }
            setTodos([newTodo, ...todos])
            inputRef.current.value = ''
        }
    }

    return (
        <div className="App">
            <Button name={'Show'} onClick={showHandler}/>
            <Button name={'Hide'} onClick={hideHandler}/>

            <div>
                {/*<span>FullInput:</span>*/}
                {/*<FullInput buttonName={'addItem2'} onClick={addTodo}/>*/}

                <Input inputRef={inputRef}/>
                <Button name={'Add'} onClick={addTodo}/>
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

