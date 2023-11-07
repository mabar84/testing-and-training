import React from 'react';
import {number, string} from 'prop-types';

type PropsType = {
    tasks: TaskType[]
    children: React.ReactNode
}

type TaskType = {
    id: number
    title: string
    isDone: boolean
}

export const Kros: React.FC<PropsType> = (props) => {
    const {tasks, children, ...rest} = props

    return (
        <div>
            <ul>
                {tasks.map((t) => {
                    return (
                        <li key={t.id}>
                            <span>{t.id}</span>
                            <span>{t.title}</span>
                            <input type="checkbox" checked={t.isDone}/>
                        </li>
                    )
                })}
            </ul>
            <div>
                {children}
            </div>
        </div>
    );
};

export default Kros;