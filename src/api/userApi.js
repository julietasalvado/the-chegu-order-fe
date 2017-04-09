// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.

import React from 'react';
import delay from './delay';

let users = [];

//This would be performed on the server in a real app. Just stubbing in.
const generateId = () => {
  return users.length + 1;
};

// var item_url = `{API_URL}/items`;
let item_url = `http://localhost:8080/api/v1/items`;

class UserApi {
  static requestHeaders() {
    //return {'AUTHORIZATION': `Bearer ${localStorage.jwt}`}
    return {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };
  }

  static getAllBuyers() {
    // return new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     resolve(Object.assign([], users));
    //   }, delay);
    // });

    const headers = this.requestHeaders();
    // var obj = {
    //   method: 'POST',
    //   headers,
    //   body: JSON.stringify({
    //     'client_id': '(API KEY)',
    //     'client_secret': '(API SECRET)',
    //     'grant_type': 'client_credentials'
    //   })
    // };
    let obj = {
      method: 'GET',
      headers
    };

    return fetch(item_url, obj).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static
  saveBuyer(buyer) {
    buyer = Object.assign({}, buyer); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minAuthorNameLength = 3;
        if (buyer.username.length < minAuthorNameLength) {
          reject(`Username must be at least ${minAuthorNameLength} characters.`);
        }

        if (buyer.id) {
          const existingAuthorIndex = users.findIndex(a => a.id == buyer.id);
          users.splice(existingAuthorIndex, 1, buyer);
        } else {
          //Just simulating creation here.
          //The server would generate ids for new authors in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          buyer.id = generateId();
          users.push(buyer);
        }

        resolve(buyer);
      }, delay);
    });
  }
}

export default UserApi;
