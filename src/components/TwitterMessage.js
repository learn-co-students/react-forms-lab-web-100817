import React from 'react';

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      remainingChars: this.props.maxChars
    };

  }

  handleChange = event => {
    console.log(event)
    this.setState({
      value: event.target.value,
      remainingChars: (this.props.maxChars - event.target.value.length),
    });
  }


  render() {
    return (
      <div>
        <strong>Your message: </strong>
        <input type="text" onChange={this.handleChange} value={this.state.value}/>
        <p>Characters Left: {this.state.remainingChars}</p>
      </div>
    );
  }
}

export default TwitterMessage;
