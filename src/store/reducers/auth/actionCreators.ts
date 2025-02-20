import { IUser } from '../../../models/IUser';
import {
    AuthActionEnum,
    SetAuthAction,
    SetErrorAction,
    SetIsLoadingAction,
    SetUserAction
} from './types';
import { AppDispatchType } from '../../index';
import UserService from '../../../api/UserService';

export const AuthActionCreators = {
    setUser: (user: IUser): SetUserAction => ({ type: AuthActionEnum.SET_USER, payload: user }),
    setIsAuth: (auth: boolean): SetAuthAction => ({ type: AuthActionEnum.SET_AUTH, payload: auth }),
    setIsLoading: (isLoading: boolean): SetIsLoadingAction => ({ type: AuthActionEnum.SET_IS_LOADING, payload: isLoading }),
    setError: (error: string): SetErrorAction => ({ type: AuthActionEnum.SET_ERROR, payload: error }),
    login: (username: string, password: string) => async (dispatch: AppDispatchType) => {
        try {
            setTimeout(async () => {
                dispatch(AuthActionCreators.setIsLoading(true))
                const response = await UserService.getUsers()
                const mockUser = response.data.find( user => user.username === username && user.password === password)

                if (mockUser) {
                    localStorage.setItem('auth', 'true')
                    localStorage.setItem('username', mockUser.username)
                    dispatch(AuthActionCreators.setUser(mockUser))
                    dispatch(AuthActionCreators.setIsAuth(true))
                } else {
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
        localStorage.removeItem('auth')
        localStorage.removeItem('username')
        dispatch(AuthActionCreators.setUser({} as IUser))
        dispatch(AuthActionCreators.setIsAuth(false))
    },
}