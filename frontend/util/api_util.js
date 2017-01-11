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


const _extractListingContent = responseData => {
  return responseData.data.children.map( child => child.data );
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
  }).then( _extractListingContent );
};
