import { ADD_SUB, DELETE_SUB, TOGGLE_SUB } from '../actions/sub_list_actions';

export default function(oldState=[], action){
  switch(action.type){

    case ADD_SUB:
      let newSub = {
        name: action.subName,
        selected: true
      };
      return [...oldState, newSub].sort();

    case TOGGLE_SUB:
      let foundIdx = oldState.findIndex( sub => sub.name === action.subName );
      newSub = {
        name: oldState[foundIdx].name,
        selected: !oldState[foundIdx].selected
      };

      return [...oldState.slice(0, foundIdx),
              newSub,
              ...oldState.slice(foundIdx + 1)];

    case DELETE_SUB:
      foundIdx = oldState.findIndex( sub => sub.name === action.subName );

      return [...oldState.slice(0, foundIdx),
              ...oldState.slice(foundIdx + 1)];

    default:
      return oldState;
  }
}
