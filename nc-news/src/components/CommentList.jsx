import React from "react";
import CommentInfo from "./CommentInfo";

export default class CommentList extends React.Component {
  state = {
    commentVoteCount: 0,
    commentList: [],
    comments: []
  };

  render() {
    return (
      <div>
        {this.props.comments.map((comment, index) => {
          return (
            <div className="comments" key={index}>
              <CommentInfo
                deleteRefreshComments={this.props.deleteRefreshComments}
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
