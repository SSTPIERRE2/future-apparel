import rootReducer from './root-reducer';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import * as user from './user/user.reducer';

const middlewares = [logger];

export interface State {
    user: user.State;
}

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
