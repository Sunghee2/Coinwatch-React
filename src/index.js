import React from 'react';
import ReactDOM from 'react-dom';

import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import promiseMiddleware from 'redux-promise-middleware';

import './index.css';
import App from './App';
import reducers from './reducers';

const composeStoreWithMiddleware = applyMiddleware (
  promiseMiddleware()
)(createStore);

ReactDOM.render(
  <Provider store = {composeStoreWithMiddleware(reducers)}>
    <App />
  </Provider>,
  document.getElementById('root'));
