import { AnyAction } from 'redux';
import SHOP_DATA from './shop.data';

export interface ShopItem {
    id: number;
    name: string;
    imageUrl: string;
    price: number;
    quantity?: number;
}

export interface ShopCategory {
    id: number;
    title: string;
    routeName: string;
    items: ShopItem[];
}

export interface State {
    collections: ShopCategory[];
}

const INITIAL_STATE: State = {
    collections: SHOP_DATA,
};

const shopReducer = (state = INITIAL_STATE, action: AnyAction) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default shopReducer;
