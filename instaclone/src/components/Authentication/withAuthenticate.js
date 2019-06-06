import React from "react";

const withAuthenticate = App => LoginPage =>
  class extends React.Component {
    state = {
      loggedIn: false
    };

    componentDidMount() {
      if (localStorage.getItem("username")) {
        this.setState({
          loggedIn: true
        });
      } else {
        this.setState({
          loggedIn: false
        });
      }
    }

    render() {
      return this.state.loggedIn ? <App /> : <LoginPage />;
    }
  };

export default withAuthenticate;
