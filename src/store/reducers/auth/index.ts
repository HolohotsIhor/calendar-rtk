import { AuthActionEnum, AuthActionTypes, IAuthState } from './types';

const initialState: IAuthState = {
    isAuth: false,
    user: { username: '', password: '' },
    isLoading: false,
    error: ''
}

export const authReducer = (state = initialState, action: AuthActionTypes): IAuthState => {
    switch (action.type) {
        case AuthActionEnum.SET_AUTH:
            return { ...state, isAuth: action.payload }

        default:
            return state
    }
}