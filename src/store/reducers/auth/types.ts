export enum AuthActionEnum {
    SET_AUTH = 'SET_AUTH'
}

export interface IAuthState {
    isAuth: boolean;
}

export interface SetAuthAction {
    type: AuthActionEnum.SET_AUTH;
    payload: boolean;
}

export type AuthActionTypes = SetAuthAction;