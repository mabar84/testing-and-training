import {v1} from 'uuid';
import {FilterValuesType, TodolistType} from "../App";


export type AddTodolistActionType = ReturnType<typeof addTodolistAC>

type ActionsType = AddTodolistActionType

const initialState: Array<TodolistType> =  []

export const todolistsReducer = (state: Array<TodolistType> = initialState, action: ActionsType): Array<TodolistType> => {
    console.log(action.title)
    switch (action.type) {

        case 'ADD-TODOLIST': {
            return [ ...state,{
                id: action.todolistId,
                title: action.title,
                filter: 'all'
            }]
        }
        default:
            return [...state];
    }
}


export const addTodolistAC = (title: string) => ({ type: 'ADD-TODOLIST' as const, title: title, todolistId: v1()} )

