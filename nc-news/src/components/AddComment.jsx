import React from "react";

export default class AddComment extends React.Component {
  state = {
    commentInput: ""
  };

  render() {
    return (
      <div>
        {this.props.loginUser && (
          <div>
            <h3>Add A New Comment</h3>
            <p>Comment</p>
            <form onSubmit={this.props.addComment}>
              <input
                required
                name="commentInput"
                onChange={this.props.handleChange}
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

  handleChange = event => {
    this.setState({ commentInput: event.target.value });
  };
}
