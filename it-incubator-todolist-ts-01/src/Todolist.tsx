import React, {useState} from 'react';
import TodoListHeader from "./TodoListHeader";
import Button from "./Button";
import {FilterValueType, TaskType} from "./App";
import Task from "./Task";
import button from "./Button";


export type TodolistpropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (todolistId: string, taskID: string) => void
    changeFilter: (todolistId: string, filter: FilterValueType) => void
    addTask: (todolistId: string, title: string) => void
    changeTaskStatus: (todolistId: string, taskId: string, isDone: boolean) => void
    filter: FilterValueType,
    todolistId: string,
    removeTodo:(todolistId: string) =>void

}


export const Todolist = (props: TodolistpropsType) => {
    const [title, setTitle] = useState<string>("")
    const [error, setError] = useState<boolean>(false)
    const taskComponents = props.tasks.map(t => {     //(<Task key ={t.id} {...t}) />
        return (
            <Task
                key={t.id}
                todolistId={props.todolistId}
                id={t.id}
                title={t.title}
                isDone={t.isDone}
                removeTask={() => props.removeTask(props.todolistId, t.id)}
                changeTaskStatus={props.changeTaskStatus}


            />
        )
    })
    const onClickAddTask = () => {
        const trimmedTitle = title.trim()
        if (trimmedTitle) {
            props.addTask(props.todolistId, trimmedTitle)
        } else {
            setError(true)
        }

        setTitle("")
    }
    const setAllFilter = () => {
        return props.changeFilter(props.todolistId, "all")
    }
    const setActiveFilter = () => {
        return props.changeFilter(props.todolistId, "active")
    }
    const setCompletedFilter = () => {
        return props.changeFilter(props.todolistId, "completed")
    }
    const onClickHandlerForDeletTodo = () => {

      props.removeTodo(props.todolistId)
    }
    return (
        <div>
            <div className={"buttonTitle"}>
                <TodoListHeader title={props.title}/>
                <button onClick={onClickHandlerForDeletTodo}>x</button>
            </div>

            <div>
                <input value={title}
                       className={error ? "error" : ""}
                       onChange={(e) => {
                           setError(false)
                           setTitle(e.currentTarget.value)
                       }}
                    // onClickAddTask={ onClickAddTask}

                />
                <button onClick={onClickAddTask}>+</button>
                {error && <div style={{color: "red"}}>Title is required</div>}
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