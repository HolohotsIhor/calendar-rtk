import { IUser } from '../../../models/IUser';
import { EventActionEnum, setEventAction, setGuestAction } from './types';
import { IEvent } from '../../../models/IEvent';
import { AppDispatchType } from '../../index';
import UserService from '../../../api/UserService';

export const EventActionCreators = {
    setGuests: (payload: IUser[]): setGuestAction => ({ type: EventActionEnum.SET_GUEST, payload }),
    setEvent: (payload: IEvent[]): setEventAction => ({ type: EventActionEnum.SET_EVENT, payload }),
    fetchGuests:  () => async (dispatch: AppDispatchType) => {
        try {
            const response = await UserService.getUsers()
            dispatch(EventActionCreators.setGuests(response.data))
        } catch(e) {
            console.log(e)
        }
    }
}