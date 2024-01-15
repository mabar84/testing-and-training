import {useState} from "react";
import {Dispatch} from "redux";
import {todolistApi, TodolistType} from "../api/todolistApi";


// type InitialType = {
//     id: string,
//     title: string,
//     filter: string
// }

type SumType=TodolistType &{
    filter: string
}

let initialState: SumType[] = [
    // {id: 'todolistID1', title: 'What to learn', filter: 'all'},
    // {id: 'todolistID2', title: 'What to buy', filter: 'all'},
]


export const TodolistReducer = (state = initialState, action: tsarTypeACType): SumType[] => {
    switch (action.type) {
        case "GET-TODOS": {
            return action.payload.todos.map((el)=>({...el,filter:'all'}))
        }
        default:
            return state
    }
}

type tsarTypeACType = getTodolistsACType
type getTodolistsACType = ReturnType<typeof getTodolistsAC>
const getTodolistsAC = (todos: TodolistType[]) => {
    return {
        type: "GET-TODOS",
        payload:{
            todos
        }
    } as const
}

export const getTodolistsTC = () => async (dispatch: Dispatch) => {
    try {
        let result = await todolistApi.getTodolists()
        dispatch(getTodolistsAC(result.data))
        // console.log()
    } catch (e) {
        console.log(e)
    }
}