import { ADD_SUB, REMOVE_SUB, TOGGLE_SUB, DELETE_SUB } from '../actions/sub_list_actions';
import { SET_FILTER } from '../actions/filter_actions';
import { fetchFeed } from '../util/api_util';
import { receiveListings, addListings, loading, INITIALIZE } from '../actions/feed_actions';
import { merge } from 'lodash';

const AFFECTED_ACTIONS = [ADD_SUB, REMOVE_SUB, TOGGLE_SUB, DELETE_SUB,
                         SET_FILTER, INITIALIZE];

export default ({getState, dispatch}) => next => action => {
  if(AFFECTED_ACTIONS.includes(action.type)){
    next(action);
    dispatch(loading());
    
    let {subList, filter} = getState();
    filter = filter.toLowerCase();
    subList = subList.filter( sub => sub.selected ).map( sub => sub.name );

    if(subList.length === 0){
      fetchFeed('', filter)
        .then( feed => dispatch(receiveListings(feed)) );
    } else {
      const promises = subList.map( sub => fetchFeed(`r/${sub}`, filter) );

      Promise.all(promises)
        .then( values => merge({}, ...values) )
        .then( feed => dispatch(receiveListings(feed)) )
    }

  } else {
    next(action);
  }
};
