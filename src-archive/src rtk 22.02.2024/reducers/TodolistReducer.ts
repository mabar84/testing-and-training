import {todolistApi, TodolistType} from "../api/todolistApi";
import {createSlice} from "@reduxjs/toolkit";
import {createAppAsyncThunk} from "../utils/createAppAsyncThunk";
import {TasksThunks} from "./TasksReducer";


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


const slice=createSlice({
    name:'todos',
    initialState,
    reducers:{},
    extraReducers:builder => {
        builder
            .addCase(getTodolists.fulfilled, (state, action)=>{
                return action.payload.todolists.map((el)=>({...el,filter:'all'}))
            })

    }
})

export const getTodolists=createAppAsyncThunk<{todolists:TodolistType[]},void>(
    'todos/getTodolists',
    async (arg, thunkAPI)=>{
        const{dispatch,rejectWithValue}=thunkAPI
        try{
            let result = await todolistApi.getTodolists()
            result.data.map(el=>{
            return(
                dispatch(TasksThunks.getTasks({todolistId: el.id}))
            )
        })
            return {todolists:result.data}
        }catch (e) {
            return rejectWithValue(null)
        }
    }
)

export const TodolistReducer=slice.reducer
export const TodolistActions=slice.actions
export const TodolistThunks={getTodolists}


// export const TodolistReducer = (state = initialState, action: tsarTypeACType): SumType[] => {
//     switch (action.type) {
//         case "GET-TODOS": {
//             return action.payload.todos.map((el)=>({...el,filter:'all'}))
//         }
//         default:
//             return state
//     }
// }

// type tsarTypeACType = getTodolistsACType
// type getTodolistsACType = ReturnType<typeof getTodolistsAC>
// const getTodolistsAC = (todos: TodolistType[]) => {
//     return {
//         type: "GET-TODOS",
//         payload:{
//             todos
//         }
//     } as const
// }
//
// export const getTodolistsTC = () => async (dispatch: AppDispatch) => {
//     try {
//         let result = await todolistApi.getTodolists()
//         dispatch(getTodolistsAC(result.data))
//         result.data.map(el=>{
//             return(
//                 dispatch(getTasksTC(el.id))
//             )
//         })
//     } catch (e) {
//         console.log(e)
//     }
// }