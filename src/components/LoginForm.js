import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  usernameChangeHandler = event => {
    this.setState(prevState => {
      return {
        ...prevState,
        username: event.target.value
      };
    });
  };

  passwordChangeHandler = event => {
    this.setState(prevState => {
      return {
        ...prevState,
        password: event.target.value
      };
    });
  };

  submitHandler = event => {
    event.preventDefault();
    if (this.state.username && this.state.password) {
      this.props.onSubmit
    }
  }

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <div>
          <label>
            Username
            <input
              id="test-username"
              type="text"
              value={this.state.username}
              onChange={this.usernameChangeHandler}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              id="test-password"
              type="password"
              value={this.state.password}
              onChange={this.passwordChangeHandler}
            />
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
