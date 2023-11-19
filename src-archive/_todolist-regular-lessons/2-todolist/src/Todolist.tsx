import React, {MouseEventHandler} from 'react';

export type FilterType = 'all' | 'active' | 'completed'

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    deleteTask: (id: number) => void
    setFilter: (filter: FilterType) => void
}

export function Todolist(props: PropsType) {

    const tasks = props.tasks.map(t => {
        return (
            <li key={t.id.toString()} style={{display: 'flex', justifyContent: 'space-between', marginBottom: '5px'}}>
                <input type="checkbox" checked={t.isDone}/>
                <span>{t.title}</span>
                <button onClick={() => props.deleteTask(t.id)}>✖</button>
            </li>
        )
    })
    const onClickHandler = (e: any) => {
        console.log(e.target.getAttribute('data-btnN'))
    }
    return <div>
        <h3>{props.title}</h3>
        <div>
            <input/>
            <button>+</button>
        </div>
        <ul style={{listStyle: 'none', padding: '0'}}>
            {tasks}
        </ul>
        <div>
            <button data-btnN={'234'} onClick={(e) => onClickHandler(e)}>All</button>
            {/*<button onClick={() => props.setFilter('active')}>Active</button>*/}
            {/*<button onClick={() => props.setFilter('completed')}>Completed</button>*/}
            {/*<button data-btn={'234'} onClick={() => props.setFilter('all')}>All</button>*/}
            {/*<button onClick={() => props.setFilter('active')}>Active</button>*/}
            {/*<button onClick={() => props.setFilter('completed')}>Completed</button>*/}
        </div>
    </div>
}
