// This component takes one prop, maxChars, which is a number representing the maximum amount of characters a message can have.
// You'll find an <input type="text"> in this component. Make this a controlled component by adding the necessary props to the <input> element. Its value should be saved in the component's state.
// Show the remaining characters in the component. It doesn't matter how you render it, as long as the number is correct. No need to guard against input that is too long — you can let the counter reach negative values.


import React from 'react';

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      value: ''
    }
  }

  handleChange = event => {
    this.setState({
      value: event.target.value
    })
  }


  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.value} onChange={this.handleChange}/>
        <p> {this.props.maxChars - this.state.value.length}</p>
      </div>
    );
  }
}

export default TwitterMessage;
