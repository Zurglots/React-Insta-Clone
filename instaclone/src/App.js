import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import PostsPage from "./components/PostContainer/PostsPage";
import withAuthenticate from "./components/Authentication/withAuthenticate";
import Login from "./components/Login/Login";

// import CommentSection from "./components/CommentSection/CommentSection";

const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)(Login);

class App extends React.Component {
  render() {
    return (
      <div className="main-wrapper">
        <ComponentFromWithAuthenticate />
      </div>
    );
  }
}

export default App;
