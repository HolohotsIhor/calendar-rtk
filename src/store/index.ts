import { combineReducers, Store } from 'redux';
import { authReducer } from './reducers/auth';
import { configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
    auth: authReducer
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware()
})

export type RootStateType = ReturnType<typeof rootReducer>
export type AppDispatchType = typeof store.dispatch

