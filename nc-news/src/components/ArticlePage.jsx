import React from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";
import { SingleArticle } from "./SingleArticle";
import { navigate } from "@reach/router";
import {
  getArticleById,
  getComments,
  delComment,
  addComment,
  patchDataVote
} from "../api.js";

export default class Article extends React.Component {
  state = {
    commentList: [],
    commentInput: "",
    userInput: "",
    articleVoteCount: 0,
    loading: true
  };
  componentDidMount() {
    getArticleById(this.props.articleid)
      .then(article => {
        this.setState({ articleInfo: article, loading: false });
      })
      .catch(err => {
        navigate("/error", {
          replace: true,
          state: { displayErr: "Non existent article" }
        });
      });

    getComments(this.props.articleid).then(comments => {
      this.setState({ commentList: comments });
    });
  }

  render() {
    return (
      <div>
        <div>
          <div>
            {this.state.loading ? (
              <h3>Loading...</h3>
            ) : (
              <div>
                <h1 className="title">Article</h1>
                <hr className="hr" />
                <SingleArticle
                  loginUser={this.props.loginUser}
                  article={this.state.articleInfo}
                  articleid={this.props.articleid}
                  handleArticleVote={this.handleArticleVote}
                  articleVoteCount={this.state.articleVoteCount}
                />

                <h3 className="title">Comments:</h3>
                <hr className="hr" />
                <AddComment
                  commentInput={this.state.commentInput}
                  loginUser={this.props.loginUser}
                  articleid={this.props.articleid}
                  addRefreshComments={this.addRefreshComments}
                  handleChange={this.handleChange}
                  addCommentStr={this.addCommentStr}
                />

                <CommentList
                  deleteRefreshComments={this.deleteRefreshComments}
                  comments={this.state.commentList}
                  loginUser={this.props.loginUser}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  deleteRefreshComments = comment_id => {
    delComment(comment_id);

    this.setState(prevState => {
      const newComments = prevState.commentList.filter(comment => {
        return comment.comment_id !== comment_id;
      });
      return {
        commentList: newComments
      };
    });
  };

  addRefreshComments = commentInput => {
    addComment(this.props.articleid, this.props.loginUser, commentInput).then(
      ({ data: { comment } }) => {
        this.setState(prevState => {
          const orderedComments = prevState.commentList.map(comment => {
            return { ...comment };
          });
          return { commentList: [comment, ...orderedComments] };
        });
      }
    );
  };

  handleArticleVote = (amount, article_id, data) => {
    patchDataVote(article_id, amount, data);

    this.setState(prevState => {
      return {
        articleVoteCount: prevState.articleVoteCount + amount
      };
    });
  };
}
