import React from 'react';
import { Provider } from 'react-redux';
import store from '../store.js';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
// Components
import Feed from './feed/feed';
import SubManager from './sub_manager/sub_manager';

const Root = () => (
  <Provider store={store}>
    <div>
      <Feed />
      <SubManager />
    </div>
  </Provider>
);

export default Root;
