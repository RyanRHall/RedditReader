import { RECEIVE_FEED, ADD_TO_FEED } from '../actions/feed_actions';

const feedReducer = (oldState=[], action) => {
  switch(action.type){
    case RECEIVE_FEED:
      return action.feed;
    case ADD_TO_FEED:
      return oldState.concat(action.feed);
    default:
      return oldState;
  }
};

export default feedReducer;
