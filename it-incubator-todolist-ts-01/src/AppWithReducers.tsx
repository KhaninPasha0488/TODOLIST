import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {v1} from 'uuid';
import AddItemForm from "./component/AddItemForm";
import {removeTaskAC} from "./state/tasks-reducer";

export type TaskType = {
    id: string,
    title: string,
    isDone: boolean,

}
export type FilterValueType = "all" | "active" | "completed";
export type TodolistsType = {
    id: string,
    title: string,
    filter: FilterValueType
}

export type TasksStateType = {
    [key: string]: Array<TaskType>
}

function AppWithReducers() {
    let todolistID1 = v1();
    let todolistID2 = v1();

    let [todolists, dispatchToTaskTodolist] = useState<Array<TodolistsType>>([
        {id: todolistID1, title: 'What to learn', filter: 'all'},
        {id: todolistID2, title: 'What to buy', filter: 'all'},
    ])

    let [tasks, dispatchToTask] = useState({
        [todolistID1]: [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "ReactJS", isDone: false},
            {id: v1(), title: "Rest API", isDone: false},
            {id: v1(), title: "GraphQL", isDone: false},
        ],
        [todolistID2]: [
            {id: v1(), title: "HTML&CSS2", isDone: true},
            {id: v1(), title: "JS2", isDone: true},
            {id: v1(), title: "ReactJS2", isDone: false},
            {id: v1(), title: "Rest API2", isDone: false},
            {id: v1(), title: "GraphQL2", isDone: false},
        ]
    });


    const editTitleTodolist = (todolistId: string, title: string) => {
        setTodolists(todolists.map(el => el.id === todolistId ? {...el, title} : el))
    }
    const editTitleTask = (todolistId: string,id:string, title: string) => {

        setTasks({...tasks, [todolistId]: tasks[todolistId].map(el => el.id === id ? {...el, title} : el)})


    }

    function removeTask(todolistId: string, id: string) {
        // setTasks({...tasks, [todolistId]: tasks[todolistId].filter(f => f.id !== id)});
        let action = removeTaskAC(todolistId,id)
        dispatchToTask(action)

    }

    function addTask(todolistId: string, title: string) {
        let newTasks = {id: v1(), title: title, isDone: false};

        setTasks({...tasks, [todolistId]: [newTasks, ...tasks[todolistId]]});
    }

    function changeStatus(todolistId: string, taskId: string, isDone: boolean) {

        setTasks({...tasks, [todolistId]: tasks[todolistId].map(m => m.id === taskId ? {...m, isDone} : m)});
        // console.log(
        //     {...tasks,
        //     [todolistId]:tasks[todolistId].map(m => m.id ===taskId ? {...m, isDone}:m)
        //     })
        // console.log(isDone)
    }

    const removeTodo = (todolistId: string) => {
        setTodolists(todolists.filter(f => f.id !== todolistId))
        delete tasks[todolistId]
        setTasks({...tasks})
    }

    function changeFilter(todolistId: string, value: FilterValueType) {
        // setFilter(value);
        setTodolists(todolists.map((m) => m.id === todolistId ? {...m, filter: value} : m))
    }

    const addTodolist = (newTitle: string) => {
        let newID = v1()
        let newTodolist: TodolistsType = {id: newID, title: newTitle, filter: 'all'}
        setTodolists([newTodolist, ...todolists])
        setTasks({[newID]: [], ...tasks})

    }

    return (
        <div className="App">
            <AddItemForm callBack={addTodolist}/>
            {todolists.map((tl, index) => {
                let tasksForTodolist = tasks[tl.id];
                if (tl.filter === "active") {
                    tasksForTodolist = tasks[tl.id].filter(t => t.isDone === false);
                }
                if (tl.filter === "completed") {
                    tasksForTodolist = tasks[tl.id].filter(t => t.isDone === true);
                }
                return (
                    <Todolist
                        key={index}
                        todolistId={tl.id}
                        title={tl.title}
                        tasks={tasksForTodolist}
                        removeTask={removeTask}
                        changeFilter={changeFilter}
                        addTask={addTask}
                        changeTaskStatus={changeStatus}
                        filter={tl.filter}
                        removeTodo={removeTodo}
                        editTitleTodolist={editTitleTodolist}
                        editTitleTask={editTitleTask}
                    />
                )
            })}

        </div>
    );
}

export default AppWithReducers;