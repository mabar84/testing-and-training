import {useState} from "react";
import {v1} from "uuid";
import {ItemType, TaskTypeAPI, todolistApi} from "../api/todolistApi";
import {Dispatch} from "redux";


type InitialType = {
    [key: string]: TaskType[]
}

type TaskType = TaskTypeAPI &{
    // id: string,
    // title: string,
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
        case "GET-TASKS":{
                       return {...state,[action.payload.todolistId]:action.payload.tasks.map(el=>({...el, isDone: false}))}
        }
        case "ADD-TASK": {
            console.log(action.payload.newTask)
            // const newTask = {id: v1(), title: "NEW-NEW", isDone: true}
            const newTask:TaskType = {...action.payload.newTask, isDone: true}

            return {...state, [action.payload.todolistId]: [newTask, ...state[action.payload.todolistId]]}
            // return {...state, [action.payload.todolistId]: [newTask, ...state[action.payload.todolistId]]}
        }
        default:
            return state
    }
}

type ActionsType = addTaskACType | getTasksACType
type addTaskACType = ReturnType<typeof addTaskAC>
export const addTaskAC = (todolistId: string,newTask:ItemType) => {
    return {
        type: "ADD-TASK",
        payload: {todolistId,newTask}
    } as const
}


export const addTaskTC = (todolistID: string) => async (dispatch: Dispatch) => {
    try {
        let result = await todolistApi.createTask(todolistID, 'NEW-USER-igor')
        dispatch(addTaskAC(todolistID, result.data.data.item))
    } catch (e) {
        console.log(e)
    }
}

type getTasksACType = ReturnType<typeof getTasksAC>
const getTasksAC = (todolistId: string, tasks: TaskTypeAPI[]) => {
    return {
        type: "GET-TASKS",
        payload: {
            todolistId,
            tasks
        }
    } as const
}
export const getTasksTC = (todolistId: string) => async (dispatch: Dispatch) => {
    try {
        let result = await todolistApi.getTasks(todolistId)
        console.log(result)
        dispatch(getTasksAC(todolistId, result.data.items))
    } catch (e) {
        console.log(e)
    }
}