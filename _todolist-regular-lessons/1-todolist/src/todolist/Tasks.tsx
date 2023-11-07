import React from 'react';

type PropsType={
    tasks: Array<
        {
            id: number
            title: string
            isDone: boolean
        }>
}

export const Tasks = (props:PropsType) => {
    return (
        <ul>
            {props.tasks.map((el) => {
                return (
                    <li key={el.id}>
                        <input type="checkbox" checked={el.isDone}/>
                        <span>{el.title}</span>
                    </li>
                )
            })}
        </ul>
    );
};

