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
    addTak: (taskTitle: string) => void
}

export function Todolist(props: PropsType) {
    const [taskTitle, setTaskTitle] = useState('')
    const isAddBtnDisabled = (taskTitle.length > 15) || !taskTitle.length

    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTaskTitle(e.currentTarget.value)
    }

    const addTaskHadler = () => {
        props.addTak(taskTitle)
        setTaskTitle('')
    }
    const addKeyDownHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        event.key === 'Enter' && !isAddBtnDisabled && addTaskHadler()
    }


    return <div>
        <h3>{props.title}</h3>
        <div>
            <input onChange={onChangeInputHandler} onKeyDown={addKeyDownHandler} value={taskTitle}/>
            <button
                disabled={isAddBtnDisabled}
                onClick={addTaskHadler}

            >
                +
            </button>
            <p>{taskTitle.length > 15 ? 'ERROR' : 'Please, type title of new task'}</p>

        </div>
        <ul>
            {
                props.tasks.map(t => <li key={t.id}>
                    <input type="checkbox" checked={t.isDone}/>
                    <span>{t.title}</span>
                    <button onClick={() => {
                        props.removeTask(t.id)
                    }}>x
                    </button>
                </li>)
            }
        </ul>
        <div>
            <button onClick={() => {
                props.changeFilter('all')
            }}>
                All
            </button>
            <button onClick={() => {
                props.changeFilter('active')
            }}>
                Active
            </button>
            <button onClick={() => {
                props.changeFilter('completed')
            }}>
                Completed
            </button>
        </div>
    </div>
}
