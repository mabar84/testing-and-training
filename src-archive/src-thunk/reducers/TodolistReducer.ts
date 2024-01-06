import {useState} from 'react';
import {todolistAPI, TodolistType} from '../api/todolist-api';
import {useAppDispatch} from '../hooks/hooks';
import {Dispatch} from 'redux';
import {AppDispatch} from '../store/store';

// type OldType = {
//     id: string
//     title: string
//     filter: string
// }

type InitialType = TodolistType & {
    filter: string
}

let initialState: InitialType[] = [
    // {id: 'todolistID1', title: 'What to learn', filter: 'all'},
    // {id: 'todolistID2', title: 'What to buy', filter: 'all'},
]

export const TodolistReducer = (state = initialState, action: ActionsType): InitialType[] => {
    switch (action.type) {
        case 'GET-TODOLISTS': {
            return action.payload.todos.map((el) => ({...el, filter: 'all'}))
        }
        default:
            return state
    }
}

type ActionsType =
    | ReturnType<typeof getTodolistAC>

const getTodolistAC = (todos: TodolistType[]) => {
    return {
        type: 'GET-TODOLISTS' as const,
        payload: {todos}
    }
}

export const getTodolistsTC = () => async (dispatch: AppDispatch) => {
    try {
        const result = await todolistAPI.getTodolists()
        dispatch(getTodolistAC(result.data))
    } catch (e) {
        console.log(e)
    }
}
