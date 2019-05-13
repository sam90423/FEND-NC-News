import React from "react";
import Axios from "axios";
import CommentInfo from "./CommentInfo";

export default class CommentList extends React.Component {
  state = {
    commentVoteCount: 0,
    commentList: [],
    comments: []
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
        {this.props.comments.map((comment, index) => {
          return (
            <div className="comments" key={index}>
              <CommentInfo
                deleteComment={this.props.deleteComment}
                comment={comment}
                loginUser={this.props.loginUser}
              />
            </div>
          );
        })}
      </div>
    );
  }
}
