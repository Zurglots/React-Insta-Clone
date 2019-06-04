import React from "react";

import Comment from "./Comment";

// class CommentSection extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//           data: dummyData
//         };
//       }
// }

function CommentSection(props) {
  return (
    <div>
      {props.coms.map(comment => (
        <div>
          <Comment comtext={comment} />
        </div>
      ))}
      <form>
        <input
          placeholder="Add a comment..."
          // onChange={this.handleChanges}
          // value={this.state.task}
          name=""
        />
        <button />
      </form>
    </div>
  );
}

export default CommentSection;
