import React from 'react';

let order_url = `http://localhost:8080/api/v1/orders`;

class OrderApi {
  static requestHeaders() {
    //return {'AUTHORIZATION': `Bearer ${localStorage.jwt}`}
    return {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };
  }

  static getLastOrder() {
    const headers = this.requestHeaders();
    let obj = {
      method: 'GET',
      headers
    };

    return fetch(order_url + '/last', obj).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

}

export default OrderApi;
