import { todolistsAPI, TodolistType } from '../../api/todos-api';
import { Dispatch } from 'redux';
import { AppThunk } from '../../app/store';

const initialState = {
    items: [
        {id: '1', addedDate: '08.06.2022', order: 1, title: 'First todo'}
    ] as TodolistType[]
}

type InitialStateType = typeof initialState

export const todosReducer = (state: InitialStateType = initialState, action: TodosActionsType): InitialStateType => {
    switch (action.type) {
        case 'SET-TODOLISTS':
            return {...state, items: action.todolists}

        case 'ADD-TODOLIST':
            return {...state, items: [...state.items, action.todolist]}

        default:
            return state
    }
}

export const setTodolistsAC = (todolists: TodolistType[]) => ({type: 'SET-TODOLISTS', todolists} as const)
export const addTodolistAC = (todolist: TodolistType) => ({type: 'ADD-TODOLIST', todolist} as const)
type SetTodolistsActionType = ReturnType<typeof setTodolistsAC>;
type AddTodolistActionType = ReturnType<typeof addTodolistAC>;
export type TodosActionsType = SetTodolistsActionType | AddTodolistActionType

export const getTodosTC = (): AppThunk => {
    return (dispatch) => {
        todolistsAPI.getTodolists()
            .then((res) => {
                dispatch(setTodolistsAC(res.data))
            })
    }
}
