import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger'
import rootReducer from "../reducers/rootReducer";
import promise from 'redux-promise-middleware';

function configureStore(initialState?: object) {
    const middleware = applyMiddleware(logger, promise());
    return createStore(rootReducer, initialState!, middleware);
}

const store = configureStore();

export default store;