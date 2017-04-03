import * as types from './actionTypes';
import buyerApi from '../api/mockUserApi';

export function addBuyer(user) {
  return {
    type: types.ADD_BUYER,
    user /*this is the same that user: user*/
  };
}

export function loadBuyersSuccess(users) {
  return {
    type: types.LOAD_BUYERS_SUCCESS,
    users /*this is the same that user: user*/
  };
}

export function loadBuyers() {
  return function (dispatch) {
    return buyerApi.getAllBuyers().then((buyers) => {
      dispatch(loadBuyersSuccess(buyers));
    }).catch(error => {
      throw (error);
    });
  };
}
