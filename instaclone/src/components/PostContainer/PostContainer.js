import React from "react";

import Post from "./Post";

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
      <div>
        {this.state.posts.map(post => {
          return <Post {...post} />;
        })}
      </div>
    );
  }
}

export default PostContainer;
