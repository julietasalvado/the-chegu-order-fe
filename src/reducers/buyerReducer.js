import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function buyerReducer(state = initialState.buyers /*it starts without buyers*/, action) {

  switch(action.type) {
    case types.ADD_BUYER:
      return [...state /*it spread state content*/,
        Object.assign({}, action.user) /*it combines empty with the user in a new obj*/
      ];

    case types.LOAD_BUYERS_SUCCESS:
      return action.users;

    default:
      return state;
  }
}
