import React from 'react';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { useDispatch } from 'react-redux';
import { addTodolistAC, getTodosTC } from './features/todos/todos-reducer';

export const App = () => {

    const dispatch = useAppDispatch()
    // const dispatch = useDispatch()

    const todos = useAppSelector(state => state.todos.items)


    const getTodosHandler = () => {
        dispatch(getTodosTC())
    }

    const addTodoHandler = () => {
        const newTodo = {id: Math.random().toString(), addedDate: '08.06.2022', order: 1, title: 'Other todo'}
        dispatch(addTodolistAC(newTodo))
        dispatch({type: 'SET-TODOLISTS', todolists: []})
    }

    return (
        <div>
            <h1>Todos</h1>
            <div style={{display: 'flex'}}>
                {todos.map((tl) => {
                    return (
                        <div key={tl.id}
                             style={{border: '2px solid black', padding: '10px', width: '200px', margin: '20px'}}>
                            <p>title: {tl.title}</p>
                            <p>addedDate: {tl.addedDate}</p>
                            <p>order: {tl.order}</p>
                            <p>id: {tl.id}</p>
                        </div>
                    )
                })}
            </div>
            <button onClick={addTodoHandler}>Add todolist</button>
            <button onClick={getTodosHandler}>Get todos</button>
        </div>
    )
}
