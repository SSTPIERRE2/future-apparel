import rootReducer from './root-reducer';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import * as user from './user/user.reducer';
import * as cart from './cart/cart.reducer';
import * as directory from './directory/directory.reducer';
import * as shop from './shop/shop.reducer';
import { persistStore } from 'redux-persist';

const middlewares = [logger];

export interface State {
    user: user.State;
    cart: cart.State;
    directory: directory.State;
    shop: shop.State;
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);
