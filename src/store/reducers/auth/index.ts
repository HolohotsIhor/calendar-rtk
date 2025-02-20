import { AuthActionEnum, AuthActionTypes, IAuthState } from './types';
import { IUser } from '../../../models/IUser';

const initialState: IAuthState = {
    isAuth: false,
    user: {} as IUser,
    isLoading: false,
    error: ''
}

export const authReducer = (state = initialState, action: AuthActionTypes): IAuthState => {
    switch (action.type) {
        case AuthActionEnum.SET_AUTH:
            return { ...state, isAuth: action.payload, isLoading: false }

        case AuthActionEnum.SET_ERROR:
            return { ...state, error: action.payload, isLoading: false}

        case AuthActionEnum.SET_IS_LOADING:
            return { ...state, isLoading: action.payload}

        case AuthActionEnum.SET_USER:
            return { ...state, user: action.payload}

        default:
            return state
    }
}