/*eslint-disable import/default */ //export is not mandatory anymore
import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import {Provider} from 'react-redux'; //attaches the store to the react container components
import routes from './routes';
import {loadBuyers} from './actions/buyerActions';
import {loadLastOrder} from './actions/orderActions';
import './styles/styles.css';
import configureStore from './store/configureStore.dev';
import '../node_modules/toastr/build/toastr.min.css';

const store = configureStore();
//initial buyers
store.dispatch(loadBuyers());
//initial order
store.dispatch(loadLastOrder());

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>,
  document.getElementById('app')
);

