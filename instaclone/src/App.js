import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import PostsPage from "./components/PostContainer/PostsPage";

// import CommentSection from "./components/CommentSection/CommentSection";

class App extends React.Component {
  state = {};

  render() {
    return (
      <div className="main-wrapper">
        <PostsPage />
      </div>
    );
  }
}

export default App;
