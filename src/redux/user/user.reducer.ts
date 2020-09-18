import { AnyAction } from 'redux';
import { User } from '../../types/user.types';
import { SET_CURRENT_USER } from './user.actions';

export interface State {
    currentUser: User;
}

const initialState: State = {
    currentUser: null,
};

const userReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload,
            };
        default:
            return state;
    }
};

export default userReducer;
