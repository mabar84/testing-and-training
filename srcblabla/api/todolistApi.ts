import axios from "axios";

const instance=axios.create({
    baseURL:'https://social-network.samuraijs.com/api/1.1/',
    withCredentials:true,
    headers:{
        'API-KEY': '0e5dc50f-7e9f-4eda-9157-a63c5026aaad'
    }
})


export const todolistApi={
    getTodolists(){
        return instance.get<TodolistType[]>('todo-lists')
    }
}

export type TodolistType = {
    id: string,
    title: string,
    addedDate: string,
    order: number,
}