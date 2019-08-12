import React from "react";

export default class AddComment extends React.Component {
  state = {
    commentInput: ""
  };

  render() {
    return (
      <div>
        {this.props.loginUser && (
          <div className="centerText">
            <h3>Add A New Comment</h3>
            <form onSubmit={this.handleSubmit}>
              <textarea
                required
                rows="6"
                cols="80"
                className="textArea"
                name="commentInput"
                onChange={this.handleChange}
                id="body"
                type="text"
              />
              <br />
              <button className="sortButton">Add Comment</button>
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
