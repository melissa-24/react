import { combineReducers } from 'redux';
import { logInReducer } from '../reducers/logInReducer';

export const rootsReducer = combineReducers({ logIn: logInReducer });
