import React from "react";

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
          <p>{post.comments.text}</p>
        </div>
      ))}
    </div>
  );
}

export default PostContainer;
