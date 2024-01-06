import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {useAppDispatch, useAppSelector} from './hooks/hooks';
import {Todos} from './Todos';
import {todolistAPI} from './api/todolist-api';
import {useDispatch} from 'react-redux';
import {getTodolistsTC} from './reducers/TodolistReducer';


function App() {

    let todos = useAppSelector(state => state.todos)
    //console.log(todos)

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getTodolistsTC())


        // todolistAPI.getTodolists()
        //     .then((res) => {
        //         console.log(res.data)
        //     })
    }, [])

    return (
        <div className="App">
            {todos.map(el => {
                return (
                    <Todos
                        key={el.id}
                        todolistId={el.id}
                        title={el.title}
                        filter={el.filter}
                    />
                )
            })}
        </div>
    );
}

export default App;
