import { State } from '../store';

export const getCurrentUser = (state: State) => state.user.currentUser;
