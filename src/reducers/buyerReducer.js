export default function buyerReducer(state = [] /*it starts without buyers*/, action) {

  switch(action.type) {
    case 'ADD_BUYER':
      debugger;
      return [...state /*it spread state content*/,
        Object.assign({}, action.user) /*it combines empty with the user in a new obj*/
      ];

    default:
      return state;
  }
}
