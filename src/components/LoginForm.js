import React from 'react';

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
    this.changeInput = this.changeInput.bind(this)
    this.submittingForm = this.submittingForm.bind(this)
  }

  submittingForm = (event) => {
    event.preventDefault();

    if (!this.state.username && !this.state.password) {
      return;
    }
    this.props.onSubmit({ username: this.state.username, password: this.state.password });
  }

  changeInput = (event) => {
    const { name, value } = event.target;
    debugger;
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <form onSubmit={this.submittingForm}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" name='username' value={this.state.username} onChange={this.changeInput} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" name='password' value={this.state.password} onChange={this.changeInput}/>
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
