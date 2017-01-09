import { ADD_SUB, REMOVE_SUB, TOGGLE_SUB } from '../actions/sub_list_actions';
import { merge } from 'lodash';

export default function(oldState=[], action){
  let newSub;
  switch(action.type){
    case ADD_SUB:
      newSub = {
        name: action.subName,
        selected: true
      };
      return [...oldState, newSub];
    case TOGGLE_SUB:
      const foundIdx = oldState.findIndex( sub => sub.name === action.subName );
      newSub = {
        name: oldState[foundIdx].name,
        selected: !oldState[foundIdx].selected
      };

      return [...oldState.slice(0, foundIdx),
              newSub,
              ...oldState.slice(foundIdx + 1)];
    // case REMOVE_SUB:
    //   return merge({}, oldState, {[action.subName]: true});
    // case TOGGLE_SUB:
    default:
      return oldState;
  }
}
