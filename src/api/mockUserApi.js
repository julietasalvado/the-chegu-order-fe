import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const users = [
  {
    id: '1',
    username: 'Marilyn Soldan',
    selection: '1',
    shopper: false,
    gatherer: false,
    img: '../../assets/images/avatar/avatar1.jpg',
    unpaired: true
  },
  {
    id: '2',
    username: 'Juanito Arcoiris',
    selection: '1',
    shopper: true,
    gatherer: false,
    img: '../../assets/images/avatar/avatar2.jpg',
    unpaired: false
  },
  {
    id: '3',
    username: 'Dalma y Gianina',
    selection: '2',
    shopper: true,
    gatherer: true,
    img: '../../assets/images/avatar/avatar3.jpg',
    unpaired: false
  }
];

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (user) => {
  return user.username.toLowerCase() + '-' + user.username.toLowerCase();
};

class UserApi {
  static getAllBuyers() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], users));
      }, delay);
    });
  }

  static saveBuyer(buyer) {
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
          buyer.id = generateId(buyer);
          users.push(buyer);
        }

        resolve(buyer);
      }, delay);
    });
  }
}

export default UserApi;
