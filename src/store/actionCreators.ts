import { AuthActionCreators } from './reducers/auth/actionCreators';
import { EventActionCreators } from './reducers/event/action-creators';
import { githubActions } from './github/githubSlice';

export const allActionCreators = {
    ...AuthActionCreators,
    ...EventActionCreators,
    ...githubActions,
}