export const RECEIVE_LISTINGS = "RECEIVE_LISTINGS";
export const ADD_LISTINGS = "ADD_LISTINGS";
export const INITIALIZE = "INITIALIZE";
export const LOADING = "LOADING";

export const receiveListings = listings => ({
  type: RECEIVE_LISTINGS,
  listings
});

export const addListings = listings => ({
  type: ADD_LISTINGS,
  listings
});

export const initialize = () => ({
  type: INITIALIZE
});

export const loading = () => ({
  type: LOADING
});
