import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
    headers: {
        'API-KEY': '0088ae57-e9fa-4964-b79a-099d88c982c5'
    }
})

export const todolistAPI = {
    getTodolists() {
        return instance.get<TodolistType[]>('todo-lists')
    }
}


export type TodolistType = {
    id: string,
    title: string,
    addedDate: string,
    order: number,
}