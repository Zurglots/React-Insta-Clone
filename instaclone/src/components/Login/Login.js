import React from "react";

class Login extends React.Component {
  state = {
    username: "",
    password: ""
  };

  login = e => {
    localStorage.setItem("username", JSON.stringify(this.state));
  };

  handleChanges = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  // ADD target values to input/form

  render() {
    return (
      <div>
        <form onSubmit={this.login}>
          <input
            onChange={this.handleChanges}
            value={this.state.username}
            name="username"
          />
          <input
            onChange={this.handleChanges}
            value={this.state.password}
            name="password"
          />
          <button>Login</button>
        </form>
      </div>
    );
  }
}

export default Login;
