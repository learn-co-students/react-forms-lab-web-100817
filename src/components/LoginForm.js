import React from 'react';

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
    };
  }

  handleUsername = (event) => {
    this.setState({
      username: event.target.value,
    })

  }

  handlePassword = (event) => {
    this.setState({
      password: event.target.value,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { username, password } = this.state;
    
    if (!username || !password) {
      alert("You need both a username and a password");
      }
    else {
        this.props.onSubmit({ username, password });
      }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="test-username" name="username" value={this.state.username} type="text" onChange={this.handleUsername}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" name="password" value={this.state.password} onChange={this.handlePassword} type="password" />
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
