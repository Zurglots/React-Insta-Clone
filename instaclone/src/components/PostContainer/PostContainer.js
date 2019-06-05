import React from "react";

import CommentSection from "../CommentSection/CommentSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class PostContainer extends React.Component {
  state = {
    posts: [],
    liked: false
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
      liked: !this.state.liked
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
                <p onClick={this.addLike}>liked</p>
              ) : (
                <FontAwesomeIcon
                  onClick={this.addLike}
                  className="heart"
                  icon={["far", "heart"]}
                />
              )}
              <FontAwesomeIcon icon={["far", "comment"]} />
              <h3>100 Likes</h3>
            </div>
            <CommentSection coms={post.comments} />
          </div>
        ))}
      </div>
    );
  }
}

export default PostContainer;
