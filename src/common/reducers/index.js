import { combineReducers } from 'redux';
import { routerStateReducer } from 'redux-router';

import layout from './layout';
import bitcoin from './bitcoin';

const rootReducer = combineReducers({
  bitcoin : bitcoin,
  layout : layout,
  router : routerStateReducer
});

export default rootReducer;