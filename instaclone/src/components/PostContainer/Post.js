import React, { Component } from "react";
import CommentSection from "../CommentSection/CommentSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Post extends Component {
  state = {
    liked: false,
    likes: this.props.likes
  };

  addLike = e => {
    if (this.state.liked) {
      return this.setState({
        liked: !this.state.liked,
        likes: this.state.likes - 1
      });
    }
    this.setState({
      liked: !this.state.liked,
      likes: this.state.likes + 1
    });
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <h3>{this.props.username}</h3>
        <img src={this.props.thumbnailUrl} />
        <img src={this.props.imageUrl} alt="instapost img" />
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
        <CommentSection coms={this.props.comments} />
      </div>
    );
  }
}

export default Post;
