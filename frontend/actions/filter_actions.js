import * as UTIL from '../util/api_util.js';

// Constants
export const RECEIVE_SUBS = "RECEIVE_SUBS";



// Async Actions
export const requestSubs = matcher => dispatch => {
  if(matcher.length <= 2){ return; }
  return UTIL.fetchSubs(matcher);
};



// Sync Actions
export const receiveSubs = subs => ({
  type: RECEIVE_SUBS,
  subs
});
