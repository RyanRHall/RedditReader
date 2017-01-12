import React from 'react';
import PicListing from './pic_listing';
import NoPicListing from './no_pic_listing';

const Feed = ({listings}) => (
  <div>
    {listings.map( listing => {
      const Component = (listing.thumbnail) ? PicListing : NoPicListing;
      return <Component listing={listing} key={listing.name} />
    })}
  </div>
);

export default Feed;
