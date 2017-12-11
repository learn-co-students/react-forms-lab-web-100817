import React from 'react';

class TwitterMessage extends React.Component {
  constructor({ maxChars }) {
    super();
    this.state = { input: '' };
  }

  textChangeHandler = event => {
    this.setState(prevState => {
      return {
        ...prevState,
        input: event.target.value
      }
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          onChange={this.textChangeHandler}
          value={this.state.input}
        />
        <p>Remaining Characters: {this.props.maxChars - this.state.input.length}</p>
      </div>
    );
  }
}

export default TwitterMessage;
