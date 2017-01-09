import React from 'react';


export default ({subList, toggleSub}) => {

  const _handleChange = e => {
    toggleSub(e.currentTarget.id);
  }



  const _renderSubs = () => (
    subList.map( sub => (
      <div key={sub.name}>
        <input type="checkbox"
               id={sub.name}
               checked={sub.selected}
               onChange={_handleChange} />
               
        <label htmlFor={sub.name}>{sub.name}</label>
      </div>
    ))
  );

  return(
    <div id="sub-list">
      {_renderSubs()}
    </div>
  )
};
