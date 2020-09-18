import { User } from '../../types/user.types';

export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export type SET_CURRENT_USER = typeof SET_CURRENT_USER;

export interface SetCurrentUserAction {
    type: SET_CURRENT_USER;
    payload: User;
}

export const setCurrentUser = (user: User): SetCurrentUserAction => ({
    type: SET_CURRENT_USER,
    payload: user,
});
