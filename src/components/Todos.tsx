import React from 'react';
import {useAppSelector} from '../hooks/hooks';

type TodosProps = {
    todosID: string
    title: string
    filter: string
}

export const Todos: React.FC<TodosProps> = (props) => {

    const {todosID, title, filter} = props
    const tasks = useAppSelector(state => state.tasks)

    // const tasksBlock=tasks.m

    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input/>
                {/*<Button name={'+'} callBack={addTaskHandler}/>*/}
                {/*<button>+</button>*/}
            </div>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    );
};
