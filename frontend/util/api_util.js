import { ajax } from 'jquery';

const ENDPOINT = "https://www.reddit.com/";

const _extractSubredditNames = responseData => (
  responseData.data.children.map( sub => sub.data.display_name )
);

export const fetchSubs = matcher => {
  const queryString = 'subreddits/search.json';

  const data = {
    q: matcher,
    limit: 7
  };

  return ajax({
    url: ENDPOINT + queryString,
    method: "GET",
    data
  }).then( _extractSubredditNames );
};
