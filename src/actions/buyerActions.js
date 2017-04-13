import * as types from './actionTypes';
import buyerApi from '../api/userApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

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
    dispatch(beginAjaxCall());
    return buyerApi.saveBuyer(buyer).then( buyer => {
      /*//if there and id, the buyer already exist
      buyer.id ? dispatch(updateBuyerSuccess(buyer)) :*/
        dispatch(createBuyerSuccess(buyer));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}

/**
 * Loads buyers from the api
 * @returns {Function}
 */
export function loadBuyers() {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    return buyerApi.getAllBuyers().then((buyers) => {
      dispatch(loadBuyersSuccess(buyers));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw (error);
    });
  };
}

