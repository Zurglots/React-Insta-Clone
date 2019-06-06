import React from "react";

import Post from "./Post";
import styled from "styled-components";

const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid red;
  max-width: 500px;
  margin: 0 auto;
`;

class PostContainer extends React.Component {
  state = {
    posts: []
  };

  componentDidUpdate(prevProps) {
    console.log(this.props);
    if (prevProps !== this.props) {
      this.setState({
        posts: this.props.posts
      });
    }
  }

  render() {
    // console.log(this.state.posts);
    return (
      <PostWrapper>
        {this.state.posts.map(post => {
          return <Post {...post} />;
        })}
      </PostWrapper>
    );
  }
}

export default PostContainer;
