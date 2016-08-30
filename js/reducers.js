import { combineReducers } from "redux"
import { RECEIVE_TWEETS ,FETCH_TWEETS, ERROR_FETCHING} from "./actionCreator"

function tweets(state = [], action){
  switch (action.type) {
    // case CREATE_TWEET:
    //   return [tweet(undefined, action), ...state.tweets]
    // case DELETE_TWEET:
    //   return state.tweets.filter(tweet => tweet.id !== action.id)
    // case EDIT_TWEET:
    //   const targetid = getIndexByuid(action.updatedTweet.id, state.tweets)
    //   return [
    //     ...state.tweets.slice(0, targetid),
    //     action.updatedTweet,
    //     ...state.tweets.slice(targetid + 1)
    //     ]
    case RECEIVE_TWEETS:
      return action.tweets
    default:
      return state
  }
}

function isFetching(state = false, action) {
  switch (action.type) {
  case FETCH_TWEETS  : return true
  case RECEIVE_TWEETS: return false
  case ERROR_FETCHING: return false
  default            : return state
  }
}

const tweetApp = combineReducers({
  tweets,
  isFetching
})

export default tweetApp
