import React from "react";

import CommentSection from "../CommentSection/CommentSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class PostContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { posts: this.props.data };
  }

  // componentDidMount() {
  //   this.setState({
  //     posts: this.props.data
  //   });
  // }
  // this.setState({
  //   posts:
  // });

  // addLike = e => {
  //   this.setState({
  //     newLike: prevState
  //   });
  // };

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
              <FontAwesomeIcon className="heart" icon={["far", "heart"]} />
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
