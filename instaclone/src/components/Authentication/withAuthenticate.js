import React from "react";

const withAuthenticate = App => LoginPage =>
  class extends React.Component {
    render() {
      return <App />;
    }
  };

export default withAuthenticate;
