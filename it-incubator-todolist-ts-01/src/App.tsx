import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./Todolist";
import {v1} from "uuid";



export type  TaskType = {
    id: string
    title: string
    isDone: boolean

}
export type FilterValueType = "all" | "active" | "completed"


// arrForTodolist1: Array<inArray>

// CRUD ОПЕРАЦИИИ

const App = () => {

    const todolistTitle: string = 'What to learn';

    const [task, setTask] = useState<Array<TaskType>>([
        {id: v1(), title: 'HTML&CSS', isDone: true},
        {id: v1(), title: 'JS', isDone: true},
        {id: v1(), title: 'React', isDone: false}

    ])
    const [filter, setFilter] = useState<FilterValueType>("all")

    const changeFilter = (filter:FilterValueType) => {
        setFilter(filter)

    }

    const getTaskForRender = () => {
        switch (filter) {
            case "active":
                return task.filter(t => !t.isDone)
            case "completed":
                return task.filter(t => t.isDone)
            default:
                return task
        }
    }

    const taskForRender = getTaskForRender()

    const removeTask = (taskID: string) => {
        setTask(task.filter(t => t.id !== taskID))
    }
    const addTask = (title:string)=>{
        const newTask :TaskType = {id:v1(), title:title, isDone: false}
        const updatedTask: Array<TaskType> = [newTask, ...task]
        setTask(updatedTask)

    }

    return (
        <div className="App">
            <Todolist title={todolistTitle}
                      task={taskForRender}
                      removeTask={removeTask}
                      changeFilter={changeFilter}
                      addTask={addTask}
            />

        </div>
    );
}

export default App;
