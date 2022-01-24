import React, {useState} from 'react';
import TodoListHeader from "./TodoListHeader";
import Button from "./Button";
import {FilterValueType, TaskType} from "./App";
import Task from "./Task";


type TodolistpropsType = {
    title: string
    task: Array<TaskType>
    removeTask: (taskID: string) => void
    changeFilter: (filter: FilterValueType) => void
    addTask: (title:string) => void
    changeTaskStatus : (taskId: string,isDone:boolean) => void
    filter:FilterValueType

}





export const Todolist = (props: TodolistpropsType) => {
    const [title,setTitle] = useState<string>("")
    const taskComponents = props.task.map(t => {     //(<Task key ={t.id} {...t}) />
        return (
            <Task
                key={t.id}
                id={t.id}
                title={t.title}
                isDone={t.isDone}
                removeTask={props.removeTask}
                changeTaskStatus={props.changeTaskStatus}


            />
        )
    })
    const onClickAddTask = ()=> {
        props.addTask(title)
        setTitle("")
    }
    const setAllFilter = ()=>{
        return props.changeFilter("all")
    }
    const setActiveFilter = ()=>{
        return props.changeFilter("active")
    }
    const setCompletedFilter = ()=>{
        return props.changeFilter("completed")
    }
    return (
        <div>
            <TodoListHeader title={props.title}/>

            <div>
                <input value={title}
                       onChange={(e) =>setTitle(e.currentTarget.value)}
                       // onClickAddTask={ onClickAddTask}

                />
                <button onClick={onClickAddTask}>+</button>
            </div>
            <ul>
                {taskComponents}

            </ul>
            <div>
                <Button
                   active={props.filter === "all"}
                    title={'All'}
                        onClickCallback={setAllFilter}
                />
                <Button
                    active={props.filter === "active"}
                    onClickCallback={setActiveFilter}
                    title={'Active'}
                />
                <Button
                    active={props.filter === "completed"}
                    onClickCallback={setCompletedFilter}
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