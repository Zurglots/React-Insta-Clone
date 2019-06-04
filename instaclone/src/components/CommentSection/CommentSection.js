import React from "react";

import Comment from "./Comment";

const randoNames = ["thing1", "thing2", "thing3"];

class CommentSection extends React.Component {
  state = {
    comments: [],
    commentInput: ""
  };

  //change handler

  componentDidMount() {
    this.setState({
      comments: this.props.coms
    });
  }

  addComment = e => {
    e.preventDefault();
    const newComment = {
      id: this.state.comments.length + 1,
      username: () => {
        let num = Math.floor(Math.random() * this.state.randoNames.length);
        return randoNames[num];
      },
      text: this.state.commentInput
    };
    this.setState({
      comments: [...this.state.comments, newComment],
      commentInput: ""
    });
  };

  handleChanges = e => {
    this.setState({
      commentInput: e.target.value
    });
  };

  render() {
    return (
      <div>
        {this.state.comments.map((comment, i) => (
          <div key={i}>
            <Comment comtext={comment} />
          </div>
        ))}
        <form onSubmit={this.addComment}>
          <input
            placeholder="Add a comment..."
            onChange={this.handleChanges}
            // value={this.state.task}
            name=""
          />
          <button />
        </form>
      </div>
    );
  }
}

export default CommentSection;
