import { combineReducers } from 'redux';
import { charactersReducer } from './charactersReducer';

export const Reducers = combineReducers({ 
  charactersReducer: charactersReducer,
});