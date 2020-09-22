import {
    TOGGLE_CART_HIDDEN,
    ToggleCartHiddenAction,
    ADD_ITEM,
    AddItemAction,
} from './cart.actions';
import { addItemToCart } from './cart.utils';
import { ShopItem } from '../../pages/shop/Shop.data';

export interface State {
    hidden: boolean;
    cartItems: ShopItem[];
}

const initialState = {
    hidden: true,
    cartItems: [] as ShopItem[],
};

const cartReducer = (
    state: State = initialState,
    action: ToggleCartHiddenAction | AddItemAction
) => {
    switch (action.type) {
        case TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden,
            };
        case ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload),
            };
        default:
            return state;
    }
};

export default cartReducer;
