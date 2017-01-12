import { RECEIVE_LISTINGS, ADD_LISTINGS, LOADING } from '../actions/feed_actions';
import { keys, shuffle, merge } from 'lodash';

const _defaultState = {
  listings: {},
  order: [],
  loading: false
};

const _shuffleKeys = obj => shuffle(keys(obj));

const feedReducer = (oldState=_defaultState, action) => {
  switch(action.type){
    case RECEIVE_LISTINGS:
      return {
        listings: action.listings,
        order: _shuffleKeys(action.listings),
        loading: false
      };

    case ADD_LISTINGS:
      const newListings = merge({}, oldState.listings, action.listings);
      const newOrder = oldState.order.concat(_shuffleKeys(action.listings));
      return {
        listings: newListings,
        order: newOrder,
        loading: false
      };

    case LOADING:
      return merge({}, oldState, {loading: true});

    default:
      return oldState;
  }
};

export default feedReducer;
