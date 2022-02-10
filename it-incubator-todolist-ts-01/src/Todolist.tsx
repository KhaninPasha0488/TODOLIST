import React, {useState} from 'react';
import EditableSpan from "./component/EditableSpan";
import Button from "./Button";
import {FilterValueType, TaskType} from "./App";
import Task from "./Task";
import button from "./Button";
import AddItemForm from "./component/AddItemForm";


export type TodolistpropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (todolistId: string, taskID: string) => void
    changeFilter: (todolistId: string, filter: FilterValueType) => void
    addTask: (todolistId: string, title: string) => void
    changeTaskStatus: (todolistId: string, taskId: string, isDone: boolean) => void
    filter: FilterValueType,
    todolistId: string,
    removeTodo: (todolistId: string) => void
    editTitleTodolist: (todolistID: string, title: string) => void
    editTitleTask: (todolistId: string, id: string, title: string) => void


}


export const Todolist = (props: TodolistpropsType) => {


    const taskComponents = props.tasks.map(t => {//(<Task key ={t.id} {...t}) />
        return (
            <Task
                key={t.id}
                todolistId={props.todolistId}
                id={t.id}
                title={t.title}
                isDone={t.isDone}
                removeTask={() => props.removeTask(props.todolistId, t.id)}
                changeTaskStatus={props.changeTaskStatus}
                editTitleTask={props.editTitleTask}

            />
        )

    })
    const changeFilterHandler = (filter:FilterValueType) => {
        return props.changeFilter(props.todolistId,filter)
    }

    // const setAllFilter = () => {
    //     return props.changeFilter(props.todolistId, "all")
    // }
    // const setActiveFilter = () => {
    //     return props.changeFilter(props.todolistId, "active")
    // }
    // const setCompletedFilter = () => {
    //     return props.changeFilter(props.todolistId, "completed")
    // }
    const onClickHandlerForDeletTodo = () => {
        props.removeTodo(props.todolistId)
    }
    const addTaskHandler = (title: string) => {
        props.addTask(props.todolistId, title)

    }
    const editTitleTodolistHendler = (tID: string, title: string) => {
        props.editTitleTodolist(props.todolistId, title,)
    }
    return (
        <div>
            <h3 className={"buttonTitle"}>
                <EditableSpan callBack={(title) => editTitleTodolistHendler(props.todolistId, title)}
                              title={props.title}/>
                <button onClick={onClickHandlerForDeletTodo}>x</button>
            </h3>
            <AddItemForm callBack={addTaskHandler}/>

            <ul>
                {taskComponents}

            </ul>
            <div>
                <Button
                    active={props.filter === "all"}
                    title={'All'}
                    onClickCallback={() => changeFilterHandler("all")}
                />
                <Button
                    active={props.filter === "active"}
                    onClickCallback={() => changeFilterHandler("active")}
                    title={'Active'}
                />
                <Button
                    active={props.filter === "completed"}
                    onClickCallback={() => changeFilterHandler("completed")}
                    title={'Completed'}
                />

            </div>
        </div>
    )
}//создать createReactApp
//скопировать сюда src того что мы делали
//так у вас получится два абсолютно одинаковых проекта (запустите оба)
{/*{props.task.map(m => {*/
}
{/*    // debugger*/
}
{/*    return (*/
}
{/*        <li><input type="checkbox" checked={m.isDone}/> <span>{m.title}</span></li>*/
}
{/*    )*/
}
{/*})}*/
}
{/*<Task key={props.task[0].id} {...props.task[0]}/>*/
}
{/*<Task key={props.task[1].id} {...props.task[1]}/>*/
}
{/*<Task key={props.task[2].id} {...props.task[2]}/>*/
}
{/*<li key={props.task[0].id} >*/
}
{/*    <input type="checkbox" checked={props.task[0].isDone}/>*/
}
{/*<span>{props.task[0].title}</span>*/
}
{/*</li>*/
}

{/* <li  key={props.task[1].id}>*/
}
{/*     <input type="checkbox" checked={props.task[1].isDone}/>*/
}
{/*<span>{props.task[1].title}</span>*/
}
{/* </li>*/
}

{/* <li  key={props.task[2].id}>*/
}
{/*     <input type="checkbox" checked={props.task[2].isDone}/>*/
}
{/*<span>{props.task[2].title}</span>*/
}
{/* </li>*/
}