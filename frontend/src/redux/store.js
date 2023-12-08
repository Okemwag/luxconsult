// src/redux/store.js
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import propertiesReducer from './reducers';

const store = createStore(propertiesReducer, applyMiddleware(thunk));

export default store;
