import { combineReducers } from 'redux';
import { authReducer } from './reducers/auth';
import { configureStore } from '@reduxjs/toolkit'; // Используем экспорт по умолчанию

const rootReducer = combineReducers({
    auth: authReducer
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware()
})

export type RootState = ReturnType<typeof rootReducer>
