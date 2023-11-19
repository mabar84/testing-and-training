import React, {useRef} from 'react';
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

    const taskTilteInput = useRef<HTMLInputElement>(null)

    const onChangeInputHandler = () => {

    }

    const addTaskHadler = () => {
        if (taskTilteInput.current) {
            const newTaskTitle = taskTilteInput.current.value
            props.addTak(newTaskTitle)

        }

    }


    return <div>
        <h3>{props.title}</h3>
        <div>
            <input ref={taskTilteInput}/>
            <button onClick={addTaskHadler}>+</button>
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
