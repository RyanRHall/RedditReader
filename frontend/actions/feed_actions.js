export const RECEIVE_FEED = "RECEIVE_FEED";
export const ADD_TO_FEED = "ADD_TO_FEED";

export const receiveFeed = feed => ({
  type: RECEIVE_FEED,
  feed
});

export const addToFeed = feed => ({
  type: ADD_TO_FEED,
  feed
});
