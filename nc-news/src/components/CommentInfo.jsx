import React from "react";
import Axios from "axios";

export default class Comment extends React.Component {
  state = {
    commentVoteCount: 0
  };

  handleCommentVote = (amount, comment_id) => {
    console.log(this.props.comments);
    console.log(comment_id);
    const url = `https://nc-news808.herokuapp.com/api/comments/${comment_id}`;

    Axios.patch(url, { inc_votes: amount });
    this.setState(prevState => {
      return {
        commentVoteCount: prevState.commentVoteCount + amount
      };
    });
  };
  render() {
    return (
      <div>
        <div className="comments">
          <p>Created At: {this.props.comment.created_at}</p>
          <p>Author: {this.props.comment.author}</p>
          <p>Body: {this.props.comment.body}</p>

          <p>Votes: {this.props.comment.votes + this.state.commentVoteCount}</p>
          {this.props.loginUser && (
            <div>
              <button
                disabled={this.state.commentVoteCount === 1}
                name="yes"
                onClick={() =>
                  this.handleCommentVote(1, this.props.comment.comment_id)
                }
              >
                YES!
              </button>
              <button
                disabled={this.state.commentVoteCount === -1}
                name="no"
                onClick={() =>
                  this.handleCommentVote(-1, this.props.comment.comment_id)
                }
              >
                NO!
              </button>{" "}
              {this.props.loginUser === this.props.comment.author && (
                <button
                  onClick={() =>
                    this.props.deleteComment(this.props.comment.comment_id)
                  }
                >
                  Delete Comment
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }
}
