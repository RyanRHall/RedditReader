import React from 'react';

const Listing = ({listing}) => (
  <div className="listing">
    <h3>{listing.title}</h3>
    <img src={listing.thumbnail}/>
  </div>
);

export default Listing;
