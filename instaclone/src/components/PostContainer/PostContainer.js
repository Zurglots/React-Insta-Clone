import React from "react";

import CommentSection from "../CommentSection/CommentSection";

// <div key={post.comments.id} className="comments">

//             </div>

function PostContainer(props) {
  console.log(props);
  return (
    <div>
      {props.data.map(post => (
        <div key={post.id} className="posts">
          <h3>{post.username}</h3>
          <img src={post.thumbnailUrl} />
          <img src={post.imageUrl} alt="instapost img" />
          <div>
            <h3>100 Likes</h3>
          </div>
          <CommentSection coms={post.comments} />
        </div>
      ))}
    </div>
  );
}

export default PostContainer;

// why does post.comments allow us to access the prop of data in that prop on line 19.
