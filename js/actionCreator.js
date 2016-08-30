import fetch from 'isomorphic-fetch'

export const RECEIVE_TWEETS = "RECEIVE_TWEETS"
function recieveTweets(tweets) {
  return {
    type: RECEIVE_TWEETS,
    tweets
  }
}

export const FETCH_TWEETS = "FETCH_TWEETS"
function fetchTweets() {
  return {
    type: FETCH_TWEETS
  }
}

export const ERROR_FETCHING = "ERROR_FETCHING"
function errorFetching() {
  return {
    type: ERROR_FETCHING
  }
}


export const createTweet = newTweet => dispatch => {
  dispatch(fetchTweets())
  return fetch(
    "http://localhost:3000/api/tweets",
    {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "image": newTweet.image, "text": newTweet.text
      })
    }
  ).then(response => response.json())
  .then(json => dispatch(recieveTweets(json.tweets)))
  .catch(dispatch(errorFetching()))
}

export const deleteTweet = id => dispatch => {
  dispatch(fetchTweets())
  return fetch(
    `http://localhost:3000/api/tweets/${id}`, { method: "DELETE" }
  ).then(response => response.json())
  .then(json => dispatch(recieveTweets(json.tweets)))
  .catch(dispatch(errorFetching()))
}

export const editTweet = (id, text, image) => (dispatch, getState) => {
  const oldTweet = getState().tweets.filter(tweet => tweet.id === id)[0]
  text = text || oldTweet.text
  image = image || oldTweet.image
  if (oldTweet.text !== text || oldTweet.image !== image){
    dispatch(fetchTweets())
    return fetch(
    `http://localhost:3000/api/tweets/${id}`,
    {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "text": text, "image": image
      })
    }
  ).then(response => response.json())
  .then(json => dispatch(recieveTweets(json.tweets)))
  .catch(dispatch(errorFetching()))
  }
}

export const getTweetsDB = () => dispatch => {
  dispatch(fetchTweets())
  return fetch("http://localhost:3000/api/tweets")
  .then(response => response.json())
  .then(json => dispatch(recieveTweets(json.tweets)))
  .catch(dispatch(errorFetching()))
}
