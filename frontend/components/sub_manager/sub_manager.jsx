import React from 'react';
import SubSearchContainer from './sub_search/sub_search_container';
import SubListContainer from './sub_list/sub_list_container';
import Filters from './filters/filters_container';

export default () => (
  <div>
    <SubSearchContainer />
    <Filters />
    <SubListContainer />
  </div>
);
