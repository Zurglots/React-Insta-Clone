import React from "react";

function PostContainer(props) {
  return (
    <div>
      {props.data.map(post => (
        <div key={post.id} className="posts">
          <h3>I am a Insta Post</h3>
          <img src={post.imageUrl} alt="instapost img" />
        </div>
      ))}
      ;
    </div>
  );
}

export default PostContainer;
