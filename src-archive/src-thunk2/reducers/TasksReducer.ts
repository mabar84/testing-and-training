import {useState} from 'react';
import {v1} from 'uuid';
import {Dispatch} from 'redux';
import {AppDispatch} from '../store/store';
import {ItemType, TaskTypeAPI, todolistApi} from '../api/todolistApi';


type InitialType = {
    [key: string]: TaskType[]
}

type TaskType = TaskTypeAPI & {
    isDone: boolean
}

let initialState: InitialType = {
    // ['todolistID1']: [
    //     {id: v1(), title: "HTML&CSS", isDone: true},
    //     {id: v1(), title: "JS", isDone: true},
    //     {id: v1(), title: "ReactJS", isDone: false},
    //     {id: v1(), title: "Rest API", isDone: false},
    //     {id: v1(), title: "GraphQL", isDone: false},
    // ],
    // ['todolistID2']: [
    //     {id: v1(), title: "HTML&CSS2", isDone: true},
    //     {id: v1(), title: "JS2", isDone: true},
    //     {id: v1(), title: "ReactJS2", isDone: false},
    //     {id: v1(), title: "Rest API2", isDone: false},
    //     {id: v1(), title: "GraphQL2", isDone: false},
    // ]
}


export const TasksReducer = (state = initialState, action: ActionsType): InitialType => {
    switch (action.type) {
        case 'ADD-TASK': {
            const todolistId = action.payload.todolistId
            return {
                ...state,
                [todolistId]: [{...action.payload.item, isDone: false}, ...state[todolistId]]
            }
        }
        case 'GET-TASKS': {
            const todolistId = action.payload.todolistId
            return {...state, [todolistId]: action.payload.items.map(el => ({...el, isDone: false}))}
        }
        default:
            return state
    }
}

type ActionsType = ReturnType<typeof addTaskAC> | ReturnType<typeof getTasksAC>

export const addTaskAC = (todolistId: string, item: ItemType) => {
    return {
        type: 'ADD-TASK',
        payload: {todolistId, item}
    } as const
}

export const addTaskTC = (todolistId: string, title: string) => async (dispatch: AppDispatch) => {
    try {
        const result = await todolistApi.addTasks(todolistId, title)
        dispatch(addTaskAC(todolistId, result.data.data.item))
    } catch (e) {
        console.log(e)
    }
}

export const getTasksAC = (todolistId: string, items: TaskTypeAPI[]) => {
    return {
        type: 'GET-TASKS',
        payload: {todolistId, items}
    } as const
}

export const getTasksTC = (todolistId: string) => async (dispatch: AppDispatch) => {
    try {
        const result = await todolistApi.getTasks(todolistId)
        dispatch(getTasksAC(todolistId, result.data.items))
    } catch (e) {
        console.log(e)

    }
}