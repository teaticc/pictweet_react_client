import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import TweetForm from '../components/TweetForm'
import TweetList from '../components/TweetList'
import { createTweet, deleteTweet, editTweet, getTweetsDB } from "../actionCreator"

class App extends React.Component{
  componentDidMount(){
    this.props.getTweetsDB()
  }

  render(){
    const { createTweet, deleteTweet, editTweet, tweets } = this.props
    return(
      <div className="contents row">
        <TweetForm tweets={tweets} createTweet={createTweet} />
        <TweetList tweets={tweets} deleteTweet={deleteTweet} editTweet={editTweet}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    tweets: state.tweets,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createTweet: (newTweet) => dispatch(createTweet(newTweet)),
    deleteTweet: (id) => dispatch(deleteTweet(id)),
    editTweet: (id, text, image) => dispatch(editTweet(id ,text, image)),
    getTweetsDB: () => dispatch(getTweetsDB())
  }
}

const AppContainer =  connect(mapStateToProps, mapDispatchToProps)(App)

export default AppContainer
