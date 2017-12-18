import React from 'react';

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const username = this.state.username
    const password = this.state.password

    if (!username || !password) {
      return;
    }

    this.props.onSubmit({ username, password });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input name="username" value={this.state.username} onChange={this.handleInputChange}  id="test-username" type="text" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input name="password" value={this.state.password} onChange={this.handleInputChange}  id="test-password" type="password" />
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
