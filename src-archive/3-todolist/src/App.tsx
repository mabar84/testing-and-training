import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from './Todolist';

export type FilterValuesType = 'all' | 'active' | 'completed';

function App() {

//Global
    let [tasks, setTasks] = useState([
        {id: crypto.randomUUID(), title: 'HTML&CSS', isDone: true},
        {id: crypto.randomUUID(), title: 'JS', isDone: true},
        {id: crypto.randomUUID(), title: 'ReactJS', isDone: false},
        {id: crypto.randomUUID(), title: 'Rest API', isDone: false},
        {id: crypto.randomUUID(), title: 'GraphQL', isDone: false},
    ]);

    function removeTask(id: string) {
        let filteredTasks = tasks.filter(t => t.id !== id);
        setTasks(filteredTasks);
    }


    const addTask = (taskTitle: string): void => {
        const newTask: TaskType = {
            isDone: false,
            title: taskTitle,
            id: crypto.randomUUID()
        }
        setTasks([newTask, ...tasks])
    }

    // Local
    let [filter, setFilter] = useState<FilterValuesType>('all');

    let tasksForTodolist = tasks;

    if (filter === 'active') {
        tasksForTodolist = tasks.filter(t => t.isDone === false);
    }
    if (filter === 'completed') {
        tasksForTodolist = tasks.filter(t => t.isDone === true);
    }

    function changeFilter(value: FilterValuesType) {
        setFilter(value);
    }

    return (
        <div className="App">
            <Todolist title="What to learn"
                      tasks={tasksForTodolist}
                      removeTask={removeTask}
                      addTak={addTask}
                      changeFilter={changeFilter}
            />
        </div>
    );
}

export default App;
