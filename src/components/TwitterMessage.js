import React from 'react';

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      tweet: ''
    };
  }

  handleChange = (event) =>{
    this.setState({
      tweet: event.target.value
    })
  }

 calculateChars = (props) =>{
   const remainingChars = this.props.maxChars - this.state.tweet.length
   return remainingChars
 }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={this.handleChange} value={this.state.tweet}/>
        <p>Remaining Characters: {this.calculateChars()}</p>
      </div>
    );
  }
}

export default TwitterMessage;
