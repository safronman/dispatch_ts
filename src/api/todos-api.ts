import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
    headers: {
        'API-KEY': '8f2534e2-22a4-4052-894e-a66c04807482'
    }
})

export const todolistsAPI = {
    getTodolists() {
        return instance.get<TodolistType[]>('todo-lists');
    }
}

export type TodolistType = {
    id: string
    title: string
    addedDate: string
    order: number
}
