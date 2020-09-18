import { TOGGLE_CART_HIDDEN, ToggleCartHiddenAction } from './cart.actions';

export interface State {
    hidden: boolean;
}

const initialState = {
    hidden: true,
};

const cartReducer = (
    state: State = initialState,
    action: ToggleCartHiddenAction
) => {
    switch (action.type) {
        case TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden,
            };
        default:
            return state;
    }
};

export default cartReducer;
