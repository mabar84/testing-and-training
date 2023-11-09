import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValuesType} from './App';

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string) => void
    changeFilter: (value: FilterValuesType) => void
    addTask: (title: string) => void
    changeTaskStatus: (taskId: string, isDone: boolean) => void
    filter: FilterValuesType
}

export function Todolist(props: PropsType) {

    let [title, setTitle] = useState('')
    const [error, setError] = useState(false)

    const addTask = () => {
        const trimmedTitle = title.trim()

        if (trimmedTitle !== '') {
            props.addTask(trimmedTitle);
        } else {
            setError(true)
        }
        setTitle('');
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        error && setError(false)

        if (e.target.value.trimStart() || (e.target.value === '')) {
            setTitle(e.target.value)
        } else {
            setError(true)
            // setTitle('')

        }


    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            addTask();
        }
    }

    const onAllClickHandler = () => props.changeFilter('all');
    const onActiveClickHandler = () => props.changeFilter('active');
    const onCompletedClickHandler = () => props.changeFilter('completed');
    const onChangeTaskStatusHandler = () => {

    }

    const tasksJSX = props.tasks.length ? props.tasks.map(t => {
        const onClickHandler = () => props.removeTask(t.id)
        const onChangeStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
            props.changeTaskStatus(t.id, e.currentTarget.checked)
        }
        return <li key={t.id} className={t.isDone ? 'task-is-done' : 'task'}>
            <input type="checkbox" onChange={onChangeStatusHandler} checked={t.isDone}/>
            <span>{t.title}</span>
            <button onClick={onClickHandler}>x</button>
        </li>
    }) : <span>Happy weekends!</span>

    const userMessageEmptyError = error ? ' AAAAAAAAAAA ERRRRORRRRRRRRR ' : null

    return <div>
        <h3>{props.title}</h3>
        <div>
            <input value={title}
                   onChange={onChangeHandler}
                   onKeyPress={onKeyPressHandler}
                   placeholder={'Please, start typing'}
                   className={error ? 'input-error' : ''}
            />
            <button onClick={addTask}>+</button>
            {userMessageEmptyError}
        </div>
        <ul>
            {
                tasksJSX
            }
        </ul>
        <div>
            <button className={props.filter === 'all' ? 'pressed' : ''} onClick={onAllClickHandler}>All</button>
            <button className={props.filter === 'active' ? 'pressed' : ''} onClick={onActiveClickHandler}>Active
            </button>
            <button className={props.filter === 'completed' ? 'pressed' : ''}
                    onClick={onCompletedClickHandler}>Completed
            </button>
        </div>
    </div>
}
