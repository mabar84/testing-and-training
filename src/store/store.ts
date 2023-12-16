import {combineReducers, legacy_createStore as createStore} from 'redux';
import {tasksReducer} from './../reducers/tasksReducer';
import {todolistReducer} from './../reducers/todolistReducer';

export const RootReducer = combineReducers({
    tasks: tasksReducer,
    todolists: todolistReducer
})

export const store = createStore(RootReducer)

export type RootState = ReturnType<typeof RootReducer>
