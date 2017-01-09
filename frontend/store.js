import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const reducer = (state, action) => ({
  state: "got it"
});

export default createStore(
  reducer,
  applyMiddleware(thunk)
);
