import {
    TOGGLE_CART_HIDDEN,
    ToggleCartHiddenAction,
    ADD_ITEM,
    AddItemAction,
    ClearItemFromCartAction,
    CLEAR_ITEM_FROM_CART,
    RemoveItemAction,
    REMOVE_ITEM,
} from './cart.actions';
import { addItemToCart, removeItemFromCart } from './cart.utils';
import { ShopItem } from '../../redux/shop/shop.data';

export interface State {
    hidden: boolean;
    cartItems: ShopItem[];
}

const initialState: State = {
    hidden: true,
    cartItems: [] as ShopItem[],
};

const cartReducer = (
    state: State = initialState,
    action:
        | ToggleCartHiddenAction
        | AddItemAction
        | ClearItemFromCartAction
        | RemoveItemAction
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
        case CLEAR_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(
                    (cartItem) => cartItem.id !== action.payload.id
                ),
            };
        case REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload),
            };
        default:
            return state;
    }
};

export default cartReducer;
