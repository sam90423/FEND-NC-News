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
          <div className="commentDetailsCon">
            <h3 className="articleDetails">{this.props.comment.author}</h3>
            <h3>{this.props.comment.created_at.slice(0, 10)}</h3>
          </div>

          <p className="article">{this.props.comment.body}</p>

          <h3>
            Votes: {this.props.comment.votes + this.state.commentVoteCount}
          </h3>

          {this.props.loginUser && (
            <div>
              <div className="commentDetailsCon">
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
              </div>
              <div>
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
            </div>
          )}

          <hr className="articleList" />
        </div>
      </div>
    );
  }
}
