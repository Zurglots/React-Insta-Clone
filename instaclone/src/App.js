import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import PostsPage from "./components/PostContainer/PostsPage";
import withAuthenticate from "./components/Authentication/withAuthenticate";
import Login from "./components/Login/Login";

// import CommentSection from "./components/CommentSection/CommentSection";

class App extends React.Component {
  state = {
    loggedIn: false
  };

  render() {
    return (
      <div className="main-wrapper">
        <ComponentFromWithAuthenticate />
      </div>
    );
  }
}

const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)(Login);

export default App;
