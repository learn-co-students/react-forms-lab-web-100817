import React from 'react';

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      charsLeft: this.props.maxChars
    };
  }

  handleChange = event => {
    let input = event.target.value

    this.setState({
      value: event.target.value,
      charsLeft: this.props.maxChars-input.length,
    });
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text"
               value={this.state.value}
               onChange={this.handleChange}/>
        <p>{this.state.charsLeft}</p>
      </div>
    );
  }
}

export default TwitterMessage;
