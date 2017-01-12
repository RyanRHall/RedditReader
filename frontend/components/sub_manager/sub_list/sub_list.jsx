import React from 'react';
import FontAwesome from 'react-fontawesome';


export default ({subList, toggleSub, deleteSub}) => {

  const _handleChange = e => {
    toggleSub(e.currentTarget.id);
  }

  const _handleDelete = subName => () => deleteSub(subName);

  const _renderSubs = () => (
    subList.map( sub => (
      <div key={sub.name}>
        <input type="checkbox"
               id={sub.name}
               checked={sub.selected}
               onChange={_handleChange} />

        <label htmlFor={sub.name}>{sub.name}</label>
        <FontAwesome name='times-circle' onClick={_handleDelete(sub.name)}/>
      </div>
    ))
  );



  return(
    <div id="sub-list">
      {_renderSubs()}
    </div>
  )
};
