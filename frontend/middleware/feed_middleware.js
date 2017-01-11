import { ADD_SUB, REMOVE_SUB, TOGGLE_SUB } from '../actions/sub_list_actions';
import { SET_FILTER } from '../actions/filter_actions';
import { fetchFeed } from '../util/api_util';
import { receiveFeed } from '../actions/feed_actions';

const AFFECTED_ACTIONS = [ADD_SUB, REMOVE_SUB, TOGGLE_SUB, SET_FILTER];

export default ({getState, dispatch}) => next => action => {
  if(AFFECTED_ACTIONS.includes(action.type)){
    next(action);
    let {subList, filter} = getState();
    filter = filter.toLowerCase();
    subList = subList.filter( sub => sub.selected ).map( sub => sub.name );

    if(subList.length === 0){
      fetchFeed('', filter)
        .then( feed => dispatch(receiveFeed(feed)) );
    }

  } else {
    next(action);
  }
};
