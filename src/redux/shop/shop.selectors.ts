import { createSelector } from 'reselect';
import { State } from '../store';

const selectShop = (state: State) => state.shop;

export const selectShopCollections = createSelector(
    [selectShop],
    (shop) => shop.collections
);
