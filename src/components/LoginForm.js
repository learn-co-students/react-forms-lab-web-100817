// An example of an input would look like: js <input id="test-username" type="text" name="username" value={this.state.username} onChange={this.handleInputChange} />
// Remember that you can retrieve the input name and value of an event.target from the JS event.
// Add the necessary event handler to the <form> element in order to call the onSubmit callback prop.
// The onSubmit callback prop should only be called if both fields are filled in (with any value).
import React from 'react';

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  handleChange = event => {
    this.setState({
      username: event.target.value,
    })
  }

  handleAnotherChange = event => {
    this.setState({
      password: event.target.value,
    })
  }

  handleSubmit = event => {
      event.preventDefault()
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="test-username" name="username" onChange={this.handleChange} value={this.state.username} type="text" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" onChange={this.handleAnotherChange} value={this.state.password} type="password" />
          </label>
        </div>
        <div>
          <button type="submit" >Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
