/*eslint-disable import/default */ //export is not mandatory anymore
import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import {Provider} from 'react-redux'; //attachs the store to the react container components
import routes from './routes';
import {loadBuyers} from './actions/buyerActions';
import './styles/styles.css';
import configureStore from './store/configureStore.dev';

const store = configureStore();
//initial buyers
store.dispatch(loadBuyers());

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>,
  document.getElementById('app')
);

