import { ShopItem } from '../../pages/shop/Shop.data';

export const TOGGLE_CART_HIDDEN = 'TOGGLE_CART_HIDDEN';
export type TOGGLE_CART_HIDDEN = typeof TOGGLE_CART_HIDDEN;

export interface ToggleCartHiddenAction {
    type: TOGGLE_CART_HIDDEN;
}

export const toggleCartHidden = (): ToggleCartHiddenAction => ({
    type: TOGGLE_CART_HIDDEN,
});

export const ADD_ITEM = 'ADD_ITEM';
export type ADD_ITEM = typeof ADD_ITEM;

export interface AddItemAction {
    type: ADD_ITEM;
    payload: ShopItem;
}

export const createAddItemAction = (payload: ShopItem): AddItemAction => ({
    type: ADD_ITEM,
    payload,
});
