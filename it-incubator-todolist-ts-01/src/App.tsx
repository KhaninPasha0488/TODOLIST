import React from 'react';
import './App.css';
import {Todolist} from "./Todolist";

export type  TaskType = {
    id: number
    title: string
    isDone: boolean
}
// arrForTodolist1: Array<inArray>



const App = () => {

    const todolistTitle_1:string = 'What to learn';
    const todolistTitle_2:string = 'What to buy';
    const task_1: Array<TaskType> =[
        {id: 1, title: 'HTML&CSS', isDone: false},
        {id: 2, title: 'JS', isDone: true},
        {id: 3, title: 'React', isDone: false},
    ]

   const task_2: Array<TaskType> = [
        {id: 4, title: 'Water', isDone: true},
        {id: 5, title: 'Milk', isDone: false},
        {id: 6, title: 'Beer', isDone: true},
    ]

    return (
        <div className="App">
            <Todolist title={todolistTitle_1} task={task_1} />
            <Todolist title={todolistTitle_2} task={task_2} />
        </div>
    );
}

export default App;
