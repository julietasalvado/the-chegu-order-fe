import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const users = [
  {
    id: '1',
    username: 'Marilyn Soldan'
  },
  {
    id: '2',
    username: 'Juanito Arcoiris'
  },
  {
    id: '3',
    username: 'Dalma y Gianina'
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
}

export default UserApi;
