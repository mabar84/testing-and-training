import {configureStore} from "@reduxjs/toolkit";
import {tasksReducer} from "../../src-archive/extra_classes_wednesday_1.1/src/state/tasks-reducer";
import {todolistsReducer} from "../../src-archive/extra_classes_wednesday_1.1/src/state/todolists-reducer";
import {combineReducers} from "redux";

let RootReducer = combineReducers({
    todos: todolistsReducer,
    tasks: tasksReducer
})

export const store = configureStore({
    reducer: RootReducer
})

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

// export type RootReducerType = ReturnType<typeof RootReducer>
// export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = ThunkDispatch<RootState, unknown, AnyAction>
// export type AppThunk<ReturnType = void> = ThunkAction<
//     ReturnType,
//     RootState,
//     unknown,
//     AnyAction
// >

