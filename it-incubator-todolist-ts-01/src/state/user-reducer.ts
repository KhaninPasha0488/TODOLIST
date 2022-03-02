import {FilterValueType, TaskType, TodolistsType} from '../App';
import {v1} from 'uuid';

export type FirstActionType = {
    type: ''
}
export type SecondActionType = {
    type: ''
}

type ActionsType = FirstActionType | SecondActionType

export const tasksReducer = (state: TaskType, action: ActionsType) => {
    switch (action.type) {
        case '':
            return state
        case '':
            return state
        default:
            throw new Error("I don't understand this type")
    }
}

export const FirstAC = (): FirstActionType => {
    return { type: ''}
}
export const SecondAC = (): SecondActionType => {
    return { type: ''}
}
