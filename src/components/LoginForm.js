import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {};
  }
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  checkForInputs = event => {
    event.preventDefault()
    if(this.state.username && this.state.password) {
      this.props.handleLogin({username: this.state.username, password: this.state.password})
    }
  }

  render() {
    return (
      <form onSubmit={this.checkForInputs}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text"
              onChange={this.handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password"
              onChange={this.handleChange}
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
