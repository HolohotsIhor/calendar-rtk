import { IUser } from '../../../models/IUser';
import {
    AuthActionEnum,
    SetAuthAction,
    SetErrorAction,
    SetIsLoadingAction,
    SetUserAction
} from './types';
import axios from 'axios';
import { AppDispatchType } from '../../index';

export const AuthActionCreators = {
    setUser: (user: IUser): SetUserAction => ({ type: AuthActionEnum.SET_USER, payload: user }),
    setIsAuth: (auth: boolean): SetAuthAction => ({ type: AuthActionEnum.SET_AUTH, payload: auth }),
    setIsLoading: (isLoading: boolean): SetIsLoadingAction => ({ type: AuthActionEnum.SET_IS_LOADING, payload: isLoading }),
    setError: (error: string): SetErrorAction => ({ type: AuthActionEnum.SET_ERROR, payload: error }),
    login: (username: string, password: string) => async (dispatch: AppDispatchType) => {
        try {
            dispatch(AuthActionCreators.setIsLoading(true))
            const mockUsers = await axios.get('./users.json')
            console.log(mockUsers)
        } catch(e) {
            dispatch(AuthActionCreators.setError('Login error'))
        }
    },
    logout: () => async (dispatch: AppDispatchType) => {
        try {

        } catch(e) {

        }
    },
}