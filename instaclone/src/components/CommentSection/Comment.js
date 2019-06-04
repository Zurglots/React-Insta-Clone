import React from "react";

const Comment = props => {
  return (
    <div>
      <h4>{props.comtext.username}</h4>
      <p>{props.comtext.text}</p>
    </div>
  );
};

export default Comment;
