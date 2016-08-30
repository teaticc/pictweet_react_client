import React, { PropTypes } from 'react'
import Tweet from '../components/Tweet'

class TweetList extends React.Component{
  render(){
    const { tweets, deleteTweet, editTweet } = this.props
    return(
      <div className="tweet-list">
        {tweets.map((tweet) =>
          <Tweet tweet={tweet} key={tweet.id} deleteTweet={deleteTweet} editTweet={editTweet}/>
        )}
      </div>
    )
  }
}

TweetList.propTypes = {
  tweets: PropTypes.array.isRequired,
  deleteTweet: PropTypes.func.isRequired,
  editTweet: PropTypes.func.isRequired
}

export default TweetList
