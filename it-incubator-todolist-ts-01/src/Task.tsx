import React, {ChangeEvent} from 'react';
import {TaskType} from "./App";


type TaskPropsType = TaskType & {
    removeTask: (todolistId:string,taskID: string) => void
    changeTaskStatus:(todolistId:string,taskID: string,isDone:boolean) => void
    todolistId:string

}
const Task: React.FC<TaskPropsType> = ({
       id,
       title,
       isDone,
       removeTask,
       changeTaskStatus,
       todolistId

}) => {
    const onChangeHandler=(e:ChangeEvent<HTMLInputElement>)=>{
        console.log( e.currentTarget.checked)
        changeTaskStatus(todolistId,id,  e.currentTarget.checked);
    }
    return (


        <li className={isDone ? "is_done": ""}>
            <input type="checkbox" checked={isDone}
               onChange= {onChangeHandler}
            />
            <span>{title}</span>
            <button onClick={() => removeTask(todolistId,id)}>x</button>
        </li>
    );
};

export default Task;
// 1. Функция принимает параметром массив чисел и возвращает max значение.
// getMax1([1,4,6,8]) => 8
// 2. Функция принимает параметром массив чисел и возвращает массив с двумя макс значениями
// getMax2([1,4,6,8]) => [8, 6]
// 3. Функция принимает параметром массив чисел и количество max,
// которые надо найти и возвращает массив  max значениями
// getMax3([1,4,6,8], 3) => [8, 6, 4]
// math.max и sort не используем!
