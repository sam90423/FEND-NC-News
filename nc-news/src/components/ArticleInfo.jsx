import React from "react";
import Axios from "axios";
import CommentList from "./CommentList";
import AddComment from "./AddComment";
import { SingleArticle } from "./SingleArticle";
import { navigate } from "@reach/router";
import { getArticleById, getComments, delComment, addComment } from "../api.js";

export default class Article extends React.Component {
  state = {
    articleInfo: [],
    commentList: [],
    commentInput: "",
    userInput: "",
    articleVoteCount: 0,
    commentVoteCount: 0,
    voteLoading: true,
    voteError: null
  };
  componentDidMount() {
    getArticleById(this.props.articleid)
      .then(article => {
        //if (article.length === 0) return Promise.reject("Non-existent article");
        this.setState({ articleInfo: article });
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
        <h1 className="title">Article</h1>
        <div>
          <div>
            <div>
              <SingleArticle
                loginUser={this.props.loginUser}
                articles={this.state.articleInfo}
                handleArticleVote={this.handleArticleVote}
                articleVoteCount={this.state.articleVoteCount}
              />

              <h3 className="title">Comments:</h3>
              <AddComment
                loginUser={this.props.loginUser}
                articleid={this.props.articleid}
                addComment={this.addComment}
                handleChange={this.handleChange}
              />

              <CommentList
                deleteComment={this.deleteComment}
                comments={this.state.commentList}
                loginUser={this.props.loginUser}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  deleteComment = comment_id => {
    delComment(comment_id);
    const newComments = this.state.commentList.filter(comment => {
      return comment.comment_id !== comment_id;
    });
    this.setState({
      commentList: newComments
    });
  };

  handleCommentVote = amount => {
    const url = `https://nc-news808.herokuapp.com/api/comments/${
      this.state.commentList[0].comment_id
    }`;

    Axios.patch(url, { inc_votes: amount });
    this.setState(prevState => {
      return {
        commentVoteCount: prevState.commentVoteCount + amount
      };
    });
  };

  handleArticleVote = amount => {
    const url = `https://nc-news808.herokuapp.com/api/articles/${
      this.props.articleid
    }`;

    Axios.patch(url, { inc_votes: amount });
    this.setState(prevState => {
      return {
        articleVoteCount: prevState.articleVoteCount + amount
      };
    });
  };

  addComment = event => {
    event.preventDefault();
    addComment(
      this.props.articleid,
      this.props.loginUser,
      this.state.commentInput
    ).then(({ data: { comment } }) => {
      this.setState(state => ({
        commentList: [comment, ...state.commentList]
      }));
    });
  };
}
