import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function buyerReducer(state = initialState.order /*it starts without buyers*/, action) {

  switch (action.type) {
    case types.LOAD_ORDER_SUCCESS:
      return action.order;

    default:
      return state;
  }
}
