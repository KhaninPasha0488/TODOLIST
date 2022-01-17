import React from 'react';
import {TaskType} from "./App";


type TaskPropsType = TaskType & {
    removeTask: (taskID: string) => void
}
const Task: React.FC<TaskPropsType> = ({
       id,
       title,
       isDone,
       removeTask

}) => {

    return (
        <li>
            <input type="checkbox" checked={isDone}/>
            <span>{title}</span>
            <button onClick={() => removeTask(id)}>x</button>
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
