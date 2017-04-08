import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function buyerReducer(state = initialState.buyers /*it starts without buyers*/, action) {

  switch (action.type) {
    case types.CREATE_BUYER_SUCCESS:
      return [...state /*it spread state content*/,
        Object.assign({}, action.buyer) /*it combines empty with the user in a new obj*/
      ];

    case types.UPDATE_BUYER_SUCCESS:
      return [...state.filter(buyer => buyer.id != action.buyer.id) /*gets the list of all buyers, except for the one being updated*/,
        Object.assign({}, action.buyer) /*it combines empty with the user in a new obj*/
      ];

    case types.LOAD_BUYERS_SUCCESS:
      return action.users;

    default:
      return state;
  }
}
