import { ADD_SUB, TOGGLE_SUB, DELETE_SUB } from '../actions/sub_list_actions';
import { SET_FILTER } from '../actions/filter_actions';
import { fetchFeed } from '../util/api_util';
import { receiveListings, receiveAdditionalListings, loading,
         REQUEST_MORE_LISTINGS } from '../actions/feed_actions';
import { merge } from 'lodash';

const AFFECTED_ACTIONS = [ADD_SUB, TOGGLE_SUB, DELETE_SUB, REQUEST_MORE_LISTINGS,
                         SET_FILTER];

export default ({getState, dispatch}) => next => action => {
  if(!AFFECTED_ACTIONS.includes(action.type)){ return next(action); }

  const successDispatch = (action.type === REQUEST_MORE_LISTINGS) ?
    receiveAdditionalListings : receiveListings;

  next(action);
  dispatch(loading());

  let {subList, filter, after} = getState();
  filter = filter.toLowerCase();
  let subNames = subList.filter( sub => sub.selected ).map( sub => sub.name );

  if(subNames.length === 0){ subNames = [''] } // Default to reddit homepage

  const promises = subNames.map(
    subName => fetchFeed(subName, filter, after[subName])
  );

  Promise.all(promises)
    .then( values => merge({}, ...values) )
    .then( feed => dispatch(successDispatch(feed)) )
};
