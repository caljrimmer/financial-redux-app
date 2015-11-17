import { combineReducers } from 'redux';
import { routerStateReducer } from 'redux-router';
import bitcoin from './bitcoin';

const rootReducer = combineReducers({
  bitcoin : bitcoin,
  router : routerStateReducer
});

export default rootReducer;