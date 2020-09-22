import { State } from '../store';
import { createSelector } from 'reselect';

const selectUser = (state: State) => state.user;

export const selectCurrentUser = createSelector(
    [selectUser],
    (user) => user.currentUser
);
