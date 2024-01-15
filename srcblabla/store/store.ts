import {AnyAction, applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import {TodolistReducer} from "../reducers/TodolistReducer";
import {TasksReducer} from "../reducers/TasksReducer";
import thunk, {ThunkAction, ThunkDispatch} from "redux-thunk";

let RootReducer = combineReducers({
    todos: TodolistReducer,
    tasks: TasksReducer
})

export let store=createStore(RootReducer,applyMiddleware(thunk))
export type RootReducerType = ReturnType<typeof RootReducer>
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ThunkDispatch<RootState, unknown,AnyAction>
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    AnyAction
    >

