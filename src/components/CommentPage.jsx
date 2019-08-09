import React from "react";
import { patchDataVote } from "../api.js";

export default class Comment extends React.Component {
  state = {
    commentVoteCount: 0
  };

  handleCommentVote = (amount, comment_id, data) => {
    patchDataVote(comment_id, amount, data);
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
          <p>{this.props.comment.created_at.slice(0, 10)}</p>
          <p>{this.props.comment.author}</p>
          <p>{this.props.comment.body}</p>

          <p>Votes: {this.props.comment.votes + this.state.commentVoteCount}</p>
          {this.props.loginUser && (
            <div>
              <button
                disabled={this.state.commentVoteCount === 1}
                name="yes"
                className="sortButton"
                onClick={() =>
                  this.handleCommentVote(
                    1,
                    this.props.comment.comment_id,
                    "comments"
                  )
                }
              >
                YES!
              </button>
              <button
                disabled={this.state.commentVoteCount === -1}
                name="no"
                className="sortButton"
                onClick={() =>
                  this.handleCommentVote(
                    -1,
                    this.props.comment.comment_id,
                    "comments"
                  )
                }
              >
                NO!
              </button>{" "}
              {this.props.loginUser === this.props.comment.author && (
                <button
                  className="sortButton"
                  onClick={() =>
                    this.props.deleteRefreshComments(
                      this.props.comment.comment_id
                    )
                  }
                >
                  Delete Comment
                </button>
              )}
            </div>
          )}
          <hr className="articleList" />
        </div>
      </div>
    );
  }
}
