import { combineReducers } from 'redux';
import subSearchReducer from './sub_search_reducer';
import subListReducer from './sub_list_reducer';
import filtersReducer from './filters_reducer';

export default combineReducers({
  subSearchResults: subSearchReducer,
  subList: subListReducer,
  filter: filtersReducer
});
