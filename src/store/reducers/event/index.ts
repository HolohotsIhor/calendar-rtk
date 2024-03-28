import { EventActionEnum, EventActionTypes, EventState } from './types';

const initialState: EventState = {
    guests: [],
    events: [],
}

export const EventReducer = (state = initialState, action: EventActionTypes): EventState => {
    switch (action.type) {
        case EventActionEnum.SET_GUEST:
            return { ...state, guests: action.payload }

        case EventActionEnum.SET_EVENT:
            return { ...state, events: action.payload }

        default:
            return state
    }
}