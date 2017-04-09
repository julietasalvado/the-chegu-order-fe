/**
 * Root reducer.
 */

import {combineReducers} from 'redux';
import buyers from './buyerReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  buyers: buyers /*I could use shorthand property name*/,
  ajaxCallsInProgress
});

export default rootReducer;
