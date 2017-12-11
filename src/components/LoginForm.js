import React from 'react';

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      usernameValue: "",
      passwordValue: ""
    };
  }

  handleInputChange = (event) => {
    if (event.target.type === "text") {
      this.setState({
        usernameValue: event.target.value
      })
    } else {
      this.setState({
        passwordValue: event.target.value
      })
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    if (this.state.usernameValue !== "" && this.state.passwordValue !== "") {
      this.props.onSubmit({username: this.state.usernameValue, password: this.state.passwordValue})
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" value={this.state.usernameValue} onChange={this.handleInputChange}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" value={this.state.passwordValue} onChange={this.handleInputChange} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
