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
    },
    createEvent: (event: IEvent) => async (dispatch: AppDispatchType) => {
        try {
            const eventsStr = localStorage.getItem('events')
            if (eventsStr) {
                const json = JSON.parse(eventsStr) as IEvent[]
                json.push(event)
                dispatch(EventActionCreators.setEvent(json))
                localStorage.setItem('events', JSON.stringify(json))
            } else {
                const events: IEvent[] = [event]
                dispatch(EventActionCreators.setEvent(events))
                localStorage.setItem('events', JSON.stringify(events));
            }
        } catch(error) {
            console.error('Error creating event:', error);
        }
    },
    fetchEvents: (username: string) => async (dispatch: AppDispatchType) => {
        try {
            const eventsStr = localStorage.getItem('events')

            if (eventsStr) {
                const json = JSON.parse(eventsStr) as IEvent[]
                const userEvents = json.filter(event => event.guest === username || event.author === username)
                dispatch(EventActionCreators.setEvent(userEvents))
            }
        } catch (error) {
            console.error('Error fetching event:', error);
        }
    }
}