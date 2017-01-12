import React from 'react';

const FILTER_NAMES = ["HOT", "NEW", "RISING"];

const Filters = ({selected, setFilter}) => {

  const _handleChange = e => {
    setFilter(e.currentTarget.id);
  };

  const _generateFilters = () => {
    return FILTER_NAMES.map( name => (
      <div key={name}>
        <input type="radio"
               name="filters"
               id={name}
               checked={name === selected}
               onChange={_handleChange}/>

        <label htmlFor={name} >{name}</label>
      </div>
    ))
  };

  return(
    <div id="filters-container">
      {_generateFilters()}
    </div>
  );
}

export default Filters;
