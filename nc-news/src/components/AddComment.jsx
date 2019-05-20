import React from "react";

export default class AddComment extends React.Component {
  state = {
    commentInput: ""
  };

  render() {
    console.log(this.state);
    return (
      <div>
        {this.props.loginUser && (
          <div>
            <h3>Add A New Comment</h3>
            <p>Comment</p>
            <form onSubmit={this.handleSubmit}>
              <input
                required
                name="commentInput"
                onChange={this.handleChange}
                id="body"
                type="text"
              />
              <button>Add Comment</button>
            </form>
          </div>
        )}
      </div>
    );
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.addRefreshComments(this.state.commentInput);
  };

  handleChange = event => {
    this.setState({ commentInput: event.target.value });
  };
}
