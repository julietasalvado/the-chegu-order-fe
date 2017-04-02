/**
 * Root reducer.
 */

import {combineReducers} from 'redux';
import buyers from './buyerReducer';

const rootReducer = combineReducers({
  buyers: buyers /*I could use shorthand property name*/
});

export default rootReducer;
