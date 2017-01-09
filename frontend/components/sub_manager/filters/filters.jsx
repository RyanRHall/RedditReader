import React from 'react';

const FILTER_NAMES = ["HOT", "NEW", "RISING"];

const Filters = ({selected, setFilter}) => {

  const _handleChange = e => {
    setFilter(e.currentTarget.id);
  };

  const _generateFilters = () => (
    FILTER_NAMES.map( name => (
      <div key={name}>
        <input type="radio"
               name="filters"
               id={name}
               selected={name === setFilter}
               onChange={_handleChange}/>

        <label htmlFor={name} >{name}</label>
      </div>
    ))
  );

  return(
    <div id="filters-container">
      {_generateFilters()}
    </div>
  );
}

export default Filters;
