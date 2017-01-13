import React from 'react';

const Details = ({listing, className}) => {

  const _shortTitle = () => (
    listing.title.length > 80 ? listing.title.slice(0, 77) + "..." : listing.title
  )

  return(
    <div className={className}>
      <h3>{_shortTitle()}</h3>
      <div>
        <span>Sub: {listing.subreddit}</span>
        <span>Up Votes: {listing.ups}</span>
        <span>Author: {listing.author}</span>
      </div>
    </div>
  );
};

export default Details;
