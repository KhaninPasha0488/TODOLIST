import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./Todolist";

export type  TaskType = {
    id: number
    title: string
    isDone: boolean
}
type FilterValueType = "all" | "active" | "completed"


// arrForTodolist1: Array<inArray>

// CRUD ОПЕРАЦИИИ

const App = () => {

    const todolistTitle:string = 'What to learn';

   // let task: Array<TaskType> =[
   //      {id: 1, title: 'HTML&CSS', isDone: false},
   //      {id: 2, title: 'JS', isDone: true},
   //      {id: 3, title: 'React', isDone: false},
   //  ]
    const [task, setTask] = useState<Array<TaskType>>([
        {id: 1, title: 'HTML&CSS', isDone: false},
        {id: 2, title: 'JS', isDone: true},
        {id: 3, title: 'React', isDone: false}

    ])
const [filter,setFilter] = useState<FilterValueType>("all")
    let taskForRender = task
    if(filter ==="active"){
        taskForRender = task.filter(t => t.isDone === false)
    }
    if(filter === "completed"){
        taskForRender = task.filter(t => t.isDone === true)
    }
const removeTask =(taskID:number)=>{
       // const filteredTask = task.filter(t => t.id !== taskID)
    setTask(task.filter(t => t.id !== taskID))
}

    return (
        <div className="App">
            <Todolist title={todolistTitle} task={taskForRender} removeTask={removeTask} />

        </div>
    );
}

export default App;
