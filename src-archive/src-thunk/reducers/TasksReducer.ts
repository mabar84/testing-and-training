import {useState} from "react";
import {v1} from "uuid";


type InitialType = {
    [key: string]: TaskType[]
}

type TaskType = {
    id: string,
    title: string,
    isDone: boolean
}

let initialState: InitialType = {
    ['todolistID1']: [
        {id: v1(), title: "HTML&CSS", isDone: true},
        {id: v1(), title: "JS", isDone: true},
        {id: v1(), title: "ReactJS", isDone: false},
        {id: v1(), title: "Rest API", isDone: false},
        {id: v1(), title: "GraphQL", isDone: false},
    ],
    ['todolistID2']: [
        {id: v1(), title: "HTML&CSS2", isDone: true},
        {id: v1(), title: "JS2", isDone: true},
        {id: v1(), title: "ReactJS2", isDone: false},
        {id: v1(), title: "Rest API2", isDone: false},
        {id: v1(), title: "GraphQL2", isDone: false},
    ]
}


export const TasksReducer = (state = initialState, action: ActionsType): InitialType => {
    switch (action.type) {
        case "ADD-TASK": {
            const newTask = {id: v1(), title: "NEW-NEW", isDone: true}
            return {...state, [action.payload.todolistId]: [newTask, ...state[action.payload.todolistId]]}
        }
        default:
            return state
    }
}

type ActionsType = addTaskACType
type addTaskACType = ReturnType<typeof addTaskAC>
export const addTaskAC = (todolistId: string) => {
    return {
        type: "ADD-TASK",
        payload: {todolistId}
    } as const
}