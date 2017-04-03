import * as types from '../actions/actionTypes';

export default function buyerReducer(state = [] /*it starts without buyers*/, action) {

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
