import React from 'react';
type TaskPropsType = {
    id: number
    title: string
    isDone: boolean
}
const Task = (props:TaskPropsType) => {
    return (
        <li key={props.id} >
            <input type="checkbox" checked={props.isDone}/>
            <span>{props.title}</span>
        </li>
    );
};

export default Task;