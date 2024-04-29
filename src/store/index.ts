import { combineReducers } from 'redux';
import { authReducer } from './reducers/auth';
import { configureStore } from '@reduxjs/toolkit';
import { EventReducer } from './reducers/event';
import { githubApi } from './github/indexApi';
import { githubReducer } from './github/githubSlice';

const rootReducer = combineReducers({
    auth: authReducer,
    event: EventReducer,
    [githubApi.reducerPath]: githubApi.reducer,
    github: githubReducer
});

export const store = configureStore({
    reducer: rootReducer,
    // Настраиваем миддлвеер. Получается метод getDefaultMiddleware и конкатинируем с миддлвеер, которы йпредоставляет API
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(githubApi.middleware)
})

export type RootStateType = ReturnType<typeof rootReducer>
export type AppDispatchType = typeof store.dispatch

