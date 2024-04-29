import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../../models/IGithub';

const LS_FAV_KEY = 'rfk'
const LS_USERS_KEY = 'ruk'

interface GithubState {
    users: IUser[],
    favourites: string[],
    search: string,
}

const initialState: GithubState = {
    users: [],
    favourites: [],
    search: '',
}

export const githubSlice = createSlice({
    name: 'github',
    initialState,
    reducers: {
        addUsers(state, action: PayloadAction<IUser[]>) {
            state.users = action.payload;
            localStorage.setItem(LS_USERS_KEY, JSON.stringify(state.users))
            console.log('add users')
        },
        addFavourite(state, action: PayloadAction<string>) {
            state.favourites.push(action.payload)
            localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.favourites))
        },
        setSearch(state, action: PayloadAction<string>) {
            state.search = action.payload
        }
    }
});

export const githubActions = githubSlice.actions
export const githubReducer = githubSlice.reducer

