import React from 'react';
import {Tasks} from "./Tasks";

type PropsType = {
    title: string
    tasks: Array<
        {
            id: number
            title: string
            isDone: boolean
        }>
}

// export type TaskType = {
//     id: number
//     title: string
//     isDone: boolean
// }


export const Todolist = (props: PropsType) => {
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
          <Tasks tasks={props.tasks}   />
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    );
};
