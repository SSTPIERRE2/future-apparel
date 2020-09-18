export const TOGGLE_CART_HIDDEN = 'TOGGLE_CART_HIDDEN';
export type TOGGLE_CART_HIDDEN = typeof TOGGLE_CART_HIDDEN;

export interface ToggleCartHiddenAction {
    type: TOGGLE_CART_HIDDEN;
}

export const toggleCardHidden = (): ToggleCartHiddenAction => ({
    type: TOGGLE_CART_HIDDEN,
});
