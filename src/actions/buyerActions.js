import * as types from './actionTypes';
import buyerApi from '../api/userApi';

export function loadBuyersSuccess(users) {
  return {
    type: types.LOAD_BUYERS_SUCCESS,
    users /*this is the same that user: user*/
  };
}

export function createBuyerSuccess(buyer) {
  return {
    type: types.CREATE_BUYER_SUCCESS,
    buyer /*this is the same that buyer: buyer*/
  };
}

export function updateBuyerSuccess(buyer) {
  return {
    type: types.UPDATE_BUYER_SUCCESS,
    buyer /*this is the same that buyer: buyer*/
  };
}

export function saveBuyer(buyer) {
  return function (dispatch/*, 'getState' it's useful to get access to the store*/) {
    return buyerApi.saveBuyer(buyer).then( buyer => {
      /*//if there and id, the buyer already exist
      buyer.id ? dispatch(updateBuyerSuccess(buyer)) :*/
        dispatch(createBuyerSuccess(buyer));
    }).catch(error => {
      throw(error);
    });
  };
}

/**
 * Loads buyers from the mock api
 * @returns {Function}
 */
export function loadBuyers() {
  return function (dispatch) {
    return buyerApi.getAllBuyers().then((buyers) => {
      dispatch(loadBuyersSuccess(buyers));
    }).catch(error => {
      throw (error);
    });
  };
}

