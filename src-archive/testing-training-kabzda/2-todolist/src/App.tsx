import React, {useState} from 'react';
import './App.css';
import {FilterType, TaskType, Todolist} from './Todolist';

function App() {

    const [tasks, setTasks] = useState<Array<TaskType>>([
        {id: 1, title: 'HTML&CSS', isDone: true},
        {id: 2, title: 'JS', isDone: true},
        {id: 3, title: 'ReactJS', isDone: false},
        {id: 4, title: 'rest API', isDone: true},
    ])

    const [filter, setFilter] = useState<FilterType>('all')

    const deleteTask = (id: number) => {
        setTasks(tasks.filter(t => t.id !== id))
    }

    let filteredTasks = tasks

    if (filter === 'active') {
        filteredTasks = tasks.filter(t => !t.isDone)
    }
    if (filter === 'completed') {
        filteredTasks = tasks.filter(t => t.isDone)
    }


    return (
        <div className="App">
            <Todolist title="What to learn" tasks={filteredTasks} deleteTask={deleteTask} setFilter={setFilter}/>
        </div>
    );
}

export default App;
