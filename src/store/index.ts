import { combineReducers } from 'redux';
import { authReducer } from './reducers/auth';
import { configureStore } from '@reduxjs/toolkit';
import { EventReducer } from './reducers/event';

const rootReducer = combineReducers({
    auth: authReducer,
    event: EventReducer
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware()
})

export type RootStateType = ReturnType<typeof rootReducer>
export type AppDispatchType = typeof store.dispatch

