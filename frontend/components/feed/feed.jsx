import React from 'react';
import Waypoint from 'react-waypoint';
import Listing from './listing';
import Spinner from './spinner';

const Feed = ({listings, loading, requestMoreListings}) => {

  const _loadingContent = () => (
    (loading) ? <Spinner /> : <div id="load-bar">Load More</div>
  );

  return(
    <div id="feed" className={loading ? "feed-loading" : ""}>
      {listings.map( listing => (
        <Listing listing={listing} key={listing.name} />
      ))}
      <Waypoint onEnter={requestMoreListings}/>
      {_loadingContent()}
    </div>
  )
};

export default Feed;
