// CONSTANTS
export const ADD_SUB = "ADD_SUB";
export const REMOVE_SUB = "REMOVE_SUB";
export const TOGGLE_SUB = "TOGGLE_SUB";

// SYNC ACTIONS
export const addSub = subName => ({
  type: ADD_SUB,
  subName
});

export const toggleSub = subName => ({
  type: TOGGLE_SUB,
  subName
});
