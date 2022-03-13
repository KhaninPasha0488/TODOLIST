import React, {ChangeEvent, useState} from 'react';
import {TaskType} from "./AppWithReducers";
import EditableSpan from "./component/EditableSpan";


type TaskPropsType = TaskType & {
    removeTask: (todolistId: string, taskID: string) => void
    changeTaskStatus: (todolistId: string, taskID: string, isDone: boolean) => void
    todolistId: string
    editTitleTask:(todolistId: string,id:string, title: string)=>void

}
const Task: React.FC<TaskPropsType> = ({
       id,
       title,
       isDone,
       removeTask,
       changeTaskStatus,
       todolistId,
       editTitleTask,

}) => {
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {

         changeTaskStatus(todolistId, id, e.currentTarget.checked);
    }


   const taskHandler = (todolistId:string ,id:string,title:string) => {
       editTitleTask(todolistId,id,title)
   }
    return (


        <li className={isDone ? "is_done" : ""}>
            <input type="checkbox" checked={isDone}
                   onChange={onChangeHandler}
            />
            <EditableSpan title={title} callBack={(title)=>taskHandler(todolistId,id,title)}/>
            <button onClick={() => removeTask(todolistId, id)}>x</button>
        </li>
    );
};

export default Task;
