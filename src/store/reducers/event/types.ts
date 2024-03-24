import { IUser } from '../../../models/IUser';
import { IEvent } from '../../../models/IEvent';

export interface EventState {
    guests: IUser[];
    events: IEvent[];
}

export enum EventActionEnum {
    SET_GUEST = 'SET_GUEST',
    SET_EVENT = 'SET_EVENT'
}

export interface setGuestAction {
    type: EventActionEnum.SET_GUEST;
    payload: IUser[];
}

export interface setEventAction {
    type: EventActionEnum.SET_EVENT;
    payload: IEvent[];
}

export type EventActionTypes = setGuestAction | setEventAction