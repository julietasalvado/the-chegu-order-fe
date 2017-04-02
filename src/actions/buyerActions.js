import * as types from './actionTypes';
export function addBuyer(user) {
  return {
    type: types.ADD_BUYER,
    user /*this is the same that user: user*/
  };
}
