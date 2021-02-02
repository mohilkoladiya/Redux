import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import bookReducer from './Book/bookReducer';

const store = createStore(bookReducer,applyMiddleware(logger));

export default store;