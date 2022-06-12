import { AnyAction, applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux';
import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { TodosActionsType, todosReducer } from '../features/todos/todos-reducer';

const rootReducer = combineReducers({
    todos: todosReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

type AppActionsType = TodosActionsType

export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch
export type AppDispatch = ThunkDispatch<RootState, unknown, AppActionsType>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, AppActionsType>
