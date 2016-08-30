import React, { PropTypes } from 'react'

class Tweet extends React.Component{
  render(){
    const tweet = this.props.tweet
    const divStyle = {
      backgroundImage: `url(${tweet.image})`
    }
    return(
      <div className="content__post" style={divStyle}>
        <div className="more">
          <span>
            <img alt="Arrow top" src="dist/arrow_top.png"></img>
          </span>
          <ul className="more_list">
            <li>
              <a onClick={this._deleteTweet.bind(this)}>削除</a>
            </li>
          </ul>
        </div>
        <p>{tweet.text}</p>
        <input type="text" placeholder="Image Url" ref="image" onBlur={this._editTweet.bind(this)}/>
        <br></br>
        <input type="text" placeholder="text" ref="text" onBlur={this._editTweet.bind(this)}/>
      </div>
    );
  }

  _deleteTweet() {
    this.props.deleteTweet(this.props.tweet.id)
  }

  _editTweet() {
    this.props.editTweet(this.props.tweet.id, this.refs.text.value, this.refs.image.value)
    this.refs.text.value = ""
    this.refs.image.value = ""
  }
}

Tweet.propTypes = {
  tweet: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  }).isRequired,
  deleteTweet: PropTypes.func.isRequired,
  editTweet: PropTypes.func.isRequired
}

export default Tweet
