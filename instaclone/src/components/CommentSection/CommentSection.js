import React from "react";

import Comment from "./Comment";

const randoNames = ["thing1", "thing2", "thing3"];

class CommentSection extends React.Component {
  state = {
    comments: [],
    commentInput: "",
    randoNames: []
  };

  //add STATIC array of user names to be used from random selector OR refactor to pull from props.

  componentDidMount() {
    this.setState({
      comments: this.props.coms
      // randoNames: this.props.coms.username
    });
  }

  addComment = e => {
    e.preventDefault();
    const newComment = {
      id: this.state.comments.length + 1,
      username: () => {
        let num = Math.floor(Math.random() * this.state.randoNames.length);
        return this.state.randoNames[num];
      },
      text: this.state.commentInput
    };
    this.setState({
      comments: [...this.state.comments, newComment],
      commentInput: ""
      // randoNames: [...this.state.randoNames, username()]
    });
  };

  handleChanges = e => {
    this.setState({
      commentInput: e.target.value
      // randomNames: e.target.num
    });
  };

  render() {
    console.log(this.props.coms.username);
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
            value={this.state.commentInput}
            // num={this.state.randoNames}
            name=""
          />
          <button />
        </form>
      </div>
    );
  }
}

export default CommentSection;
