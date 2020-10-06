import { ShopItem } from '../../redux/shop/shop.data';

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

export const REMOVE_ITEM = 'REMOVE_ITEM';
export type REMOVE_ITEM = typeof REMOVE_ITEM;

export interface RemoveItemAction {
    type: REMOVE_ITEM;
    payload: ShopItem;
}

export const createRemoveItemAction = (
    payload: ShopItem
): RemoveItemAction => ({
    type: REMOVE_ITEM,
    payload,
});

export const CLEAR_ITEM_FROM_CART = 'CLEAR_ITEM_FROM_CART';
export type CLEAR_ITEM_FROM_CART = typeof CLEAR_ITEM_FROM_CART;

export interface ClearItemFromCartAction {
    type: CLEAR_ITEM_FROM_CART;
    payload: ShopItem;
}

export const clearItemFromCart = (item: ShopItem): ClearItemFromCartAction => ({
    type: CLEAR_ITEM_FROM_CART,
    payload: item,
});
