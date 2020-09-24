import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }
  handleLogin = event => {
    event.preventDefault()
    let formData = {
      username: this.state.username,
      password: this.state.password
    }
    this.setState({formData})
  }
  hadleInputChange = event => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    })
  }
  render() {
    return (
      <form>
        <div>
          <label>
            Username
            <input 
              id="username" 
              name="username" 
              type="text"
              value={this.state.username}
              onchange={this.hadleInputChange} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input 
              id="password" 
              name="password" 
              type="password" 
              value={this.state.username}
              onchange={this.hadleInputChange} 
              />
          </label>
        </div>
        <div>
          <button type="submit" onSubmit={this.handleLogin}>Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
