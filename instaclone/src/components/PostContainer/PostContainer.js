import React from "react";

import CommentSection from "../CommentSection/CommentSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class PostContainer extends React.Component {
  state = {
    posts: [],
    liked: false,
    likes: ""
  };

  componentDidUpdate(prevProps) {
    console.log(this.props);
    if (prevProps !== this.props) {
      this.setState({
        posts: this.props.data
      });
    }
  }

  addLike = e => {
    this.setState({
      liked: !this.state.liked,
      likes: this.state.likes + 1
    });
  };

  render() {
    console.log(this.state.posts);
    return (
      <div>
        {this.state.posts.map(post => (
          <div key={post.id} className="posts">
            <h3>{post.username}</h3>
            <img src={post.thumbnailUrl} />
            <img src={post.imageUrl} alt="instapost img" />
            <div>
              {this.state.liked ? (
                <FontAwesomeIcon
                  onClick={this.addLike}
                  className="heart"
                  icon={["fas", "heart"]}
                  style={{ color: "red" }}
                />
              ) : (
                <FontAwesomeIcon
                  onClick={this.addLike}
                  className="heart"
                  icon={["far", "heart"]}
                />
              )}
              <FontAwesomeIcon icon={["far", "comment"]} />
              <h3>{this.state.likes} Likes</h3>
            </div>
            <CommentSection coms={post.comments} />
          </div>
        ))}
      </div>
    );
  }
}

export default PostContainer;
