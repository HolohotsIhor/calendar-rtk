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
            setTimeout(async () => {
                dispatch(AuthActionCreators.setIsLoading(true))
                const response = await axios.get<IUser[]>('./users.json')
                const mockUser = response.data.find( user => user.username === username && user.password === password)

                if (mockUser) {
                    localStorage.setItem('auth', 'true')
                    localStorage.setItem('username', mockUser.username)
                    dispatch(AuthActionCreators.setIsAuth(true))
                    dispatch(AuthActionCreators.setUser(mockUser))
                } else {
                    localStorage.setItem('auth', 'false')
                    dispatch(AuthActionCreators.setError('Can\'t find user'))
                }
                dispatch(AuthActionCreators.setIsLoading(false))
            }, 1000)
        } catch(e) {
            dispatch(AuthActionCreators.setIsLoading(true))
            dispatch(AuthActionCreators.setError('Login error'))
            dispatch(AuthActionCreators.setIsLoading(false))
        }
    },
    logout: () => async (dispatch: AppDispatchType) => {
        try {

        } catch(e) {

        }
    },
}