import React from 'react';
import { Provider } from 'react-redux';
import store from '../store.js';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
// Components
import Feed from './feed/feed';
import Filters from './filters/filters';

const Root = () => (
  <Provider store={store}>
    <div>
      <Feed />
      <Filters />
    </div>
  </Provider>
);

export default Root;
