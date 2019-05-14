import React from "react";
import Axios from "axios";
import CommentList from "./CommentList";
import AddComment from "./AddComment";
import { SingleArticle } from "./SingleArticle";

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
    const articleUrl = `https://nc-news808.herokuapp.com/api/articles/${
      this.props.articleid
    }`;

    Axios.get(articleUrl).then(({ data: { article } }) => {
      this.setState({ articleInfo: article });
    });

    this.fetchComments();
  }

  fetchComments() {
    const commentUrl = `https://nc-news808.herokuapp.com/api/articles/${
      this.props.articleid
    }/comments`;

    Axios.get(commentUrl).then(({ data: { comments } }) => {
      this.setState({ commentList: comments });
    });
  }

  render() {
    return (
      <div>
        <h1>Article</h1>
        <div>
          <div>
            <div>
              <SingleArticle
                loginUser={this.props.loginUser}
                articles={this.state.articleInfo}
                handleArticleVote={this.handleArticleVote}
                articleVoteCount={this.state.articleVoteCount}
              />

              <h3>Comments:</h3>
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
    const url = `https://nc-news808.herokuapp.com/api/comments/${comment_id}`;
    Axios.delete(url).then(() => {
      this.fetchComments();
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
    const url = `https://nc-news808.herokuapp.com/api/articles/${
      this.props.articleid
    }/comments`;
    Axios.post(url, {
      username: this.props.loginUser,
      body: this.state.commentInput
    })
      .then(res => {
        this.setState(state => ({
          commentList: [res.data.comment, ...state.commentList]
        }));
        console.log(res);
      })
      .catch(err => console.log(err));
  };
}
