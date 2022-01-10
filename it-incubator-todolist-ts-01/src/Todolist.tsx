import React from 'react';
import TodoListHeader from "./TodoListHeader";
import Button from "./Button";
import {TaskType} from "./App";
import Task from "./Task";


 type TodolistpropsType = {
    title: string
    task: Array<TaskType>
     removeTask :(taskID:number)=> void

}



export const Todolist = (props: TodolistpropsType) => {
    const taskComponents = props.task.map(t => {
        return (
            <Task
                key={t.id}
                id={t.id}
                title={t.title}
                isDone={t.isDone}
                removeTask ={props.removeTask}

            />
        )
    })
    return (
        <div>
            <TodoListHeader title={props.title}/>

            <div>
                <input/>
                <button >+</button>
            </div>
            <ul>
                {taskComponents}

                {/*{props.task.map(m => {*/}
                {/*    // debugger*/}
                {/*    return (*/}
                {/*        <li><input type="checkbox" checked={m.isDone}/> <span>{m.title}</span></li>*/}
                {/*    )*/}
                {/*})}*/}
                {/*<Task key={props.task[0].id} {...props.task[0]}/>*/}
                {/*<Task key={props.task[1].id} {...props.task[1]}/>*/}
                {/*<Task key={props.task[2].id} {...props.task[2]}/>*/}
                {/*<li key={props.task[0].id} >*/}
                {/*    <input type="checkbox" checked={props.task[0].isDone}/>*/}
                {/*<span>{props.task[0].title}</span>*/}
                {/*</li>*/}

                {/* <li  key={props.task[1].id}>*/}
                {/*     <input type="checkbox" checked={props.task[1].isDone}/>*/}
                {/*<span>{props.task[1].title}</span>*/}
                {/* </li>*/}

                {/* <li  key={props.task[2].id}>*/}
                {/*     <input type="checkbox" checked={props.task[2].isDone}/>*/}
                {/*<span>{props.task[2].title}</span>*/}
                {/* </li>*/}
            </ul>
            <div>
                <Button title={'All'}/>
                <Button title={'Active'}/>
                <Button title={'Active'}/>
                {/*<button>All</button>*/}
                {/*<button>Active</button>*/}
                {/*<button>Completed</button>*/}
            </div>
        </div>
    )
}//создать createReactApp
//скопировать сюда src того что мы делали
//так у вас получится два абсолютно одинаковых проекта (запустите оба)
