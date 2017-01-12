import React from 'react';

const NoPicListing = ({listing, className}) => {

  return(
    <div className={className}>
      <h3>{listing.title}</h3>
      <div>
        <span>Sub: {listing.subreddit}</span>
        <span>Up Votes: {listing.ups}</span>
        <span>Author: {listing.author}</span>
      </div>
    </div>
  );
};

export default NoPicListing;
