import { ajax } from 'jquery';
import path from 'path';

const ENDPOINT = "https://www.reddit.com/";

const _extractSubredditNames = responseData => (
  responseData.data.children.map( sub => sub.data.display_name )
);

export const fetchSubs = matcher => {
  const reqPath = 'subreddits/search.json';

  const data = {
    q: matcher,
    limit: 7
  };

  return ajax({
    url: ENDPOINT + reqPath,
    method: "GET",
    data
  }).then( _extractSubredditNames );
};


const _extractListingContent = responseData => (
  responseData.data.children.map( child => child.data )
);

const _normalizeListings = listings => {
  const normalListings = {};
  listings.forEach( listing => {
    let thumb = listing.thumbnail;
    listing.thumbnail = (thumb.slice(0, 4) === "http" ? thumb : false);
    normalListings[listing.name] = listing;
  });
  return normalListings;
};

export const fetchFeed = (sub, filter) => {
  const reqPath = path.join(sub, filter) + '.json';

  const data = {
    limit: 10
  };

  return ajax({
    url: ENDPOINT + reqPath,
    method: "GET",
    data
  })
  .then( _extractListingContent )
  .then( _normalizeListings );

};
