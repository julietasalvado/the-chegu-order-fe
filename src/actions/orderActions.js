import * as types from './actionTypes';
import orderApi from '../api/orderApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadOrderSuccess(order) {
  return {
    type: types.LOAD_ORDER_SUCCESS,
    order /*this is the same that order: order*/
  };
}

/**
 * Loads last order from the api
 * @returns {Function}
 */
export function loadLastOrder() {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    return orderApi.getLastOrder().then((order) => {
      dispatch(loadOrderSuccess(order));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw (error);
    });
  };
}
