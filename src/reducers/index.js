/**
 * Root reducer.
 */

import {combineReducers} from 'redux';
import buyers from './buyerReducer';
import order from './orderReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  buyers: buyers /*I could use shorthand property name*/,
  order,
  ajaxCallsInProgress
});

export default rootReducer;
