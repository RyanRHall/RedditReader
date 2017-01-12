import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { Row, Column } from 'react-foundation';
import store from '../store.js';
import { initialize } from '../actions/feed_actions';
// Components
import FeedContainer from './feed/feed_container';
import SubManager from './sub_manager/sub_manager';

class Root extends React.Component {

  componentWillMount(){
    store.dispatch(initialize());
  }

  render(){
    return(
      <Provider store={store}>
        <Row className="display">
          <Column small={12} large={4}><SubManager /></Column>
          <Column small={12} large={8}><FeedContainer /></Column>
        </Row>
      </Provider>
    );
  }

}

export default Root;
