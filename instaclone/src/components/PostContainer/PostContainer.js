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
        posts: this.props.data,
        likes: this.props.likes
      });
    }
  }

  render() {
    console.log(this.state.posts);
    return (
      <div>
        {this.state.posts.map((post, i) => (
          <div key={post.id} className="posts">
            <Post {...post} />
          </div>
        ))}
      </div>
    );
  }
}

export default PostContainer;
