import React, { PropTypes } from 'react'

class TweetForm extends React.Component{
  render(){
    return(
      <div className="tweet-form">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <h3>投稿する</h3>
          <input placeholder="Image Url" type="text" ref="image"/>
          <textarea placeholder="text" cols="30" rows="10" ref="text" />
          <input type="submit" value="SENT"></input>
        </form>
      </div>
    )
  }

  handleSubmit(e){
    e.preventDefault()
    const newTweet = { text: this.refs.text.value, image: this.refs.image.value }
    this.props.createTweet(newTweet)
    this.refs.text.value = ""
    this.refs.image.value = ""
  }
}

export default TweetForm
