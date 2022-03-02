import {FilterValueType, TaskType, TodolistsType} from '../App';
import {v1} from 'uuid';

export type RemoveTaskActionType = {
    type: 'REMOVE-TASK'
    taskId:string
    todolistId:string
}
export type SecondActionType = {
    type: ''
}

type ActionsType = RemoveTaskActionType | SecondActionType

export const tasksReducer = (state: TaskType, action: ActionsType) => {
    switch (action.type) {
        case 'REMOVE-TASK':
            return {...state
            }
        case '':
            return state
        default:
            throw new Error("I don't understand this type")
    }
}

export const FirstAC = (): FirstActionType => {
    return { type: ''}
}
export const addTaskAC = (): SecondActionType => {
    return { type: ''}
}
