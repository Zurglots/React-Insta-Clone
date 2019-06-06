import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import PostsPage from "./components/PostContainer/PostsPage";
import withAuthenticate from "./components/Authentication/withAuthenticate";
import Login from "./components/Login/Login";
import styled from "styled-components";
// import CommentSection from "./components/CommentSection/CommentSection";

const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)(Login);

const AppDiv = styled.div`
  font-family: sans-serif;
  text-align: center;
`;

class App extends React.Component {
  render() {
    return (
      <AppDiv className="main-wrapper">
        <ComponentFromWithAuthenticate />
      </AppDiv>
    );
  }
}

export default App;
