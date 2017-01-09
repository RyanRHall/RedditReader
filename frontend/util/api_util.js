import { ajax, get } from 'jquery';

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
  }).then( _extractSubredditNames )
    .then( names => console.log(names) );
};


export const fetchAccessToken = code => {
  const accessTokenData = {
    grant_type: 'authorization_code',
    redirect_uri: 'http://localhost:5000/home',
    code
  };

  return ajax({
    method: "POST",
    url: "https://www.reddit.com/api/v1/access_token",
    data: accessTokenData
  });
};
