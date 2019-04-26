import React from "react";
import Axios from "axios";
import CommentList from "./CommentList";

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

  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.commentList !== prevState.commentList) {
  //     this.fetchComments();
  //   }
  // }
  render() {
    return (
      <div>
        <h1>Article</h1>
        <div>
          <div>
            <div>
              {this.state.articleInfo.map(article => {
                return (
                  <div>
                    <p>Title: {article.title}</p>
                    <p>Topic: {article.topic}</p>
                    <p>Author: {article.author}</p>
                    <p>Body:{article.body}</p>
                    <p>Votes: {article.votes}</p>
                    <p>Votes: {this.state.articleVoteCount}</p>
                    <button
                      name="yes"
                      onClick={() => this.handleArticleVote(1)}
                    >
                      YES!
                    </button>
                    <button
                      name="no"
                      onClick={() => this.handleArticleVote(-1)}
                    >
                      NO!
                    </button>
                  </div>
                );
              })}

              <h3>Comments:</h3>
              <h3>Add A New Comment</h3>
              <p>Username</p>
              <input
                name="userInput"
                value={this.state.userInput}
                onChange={this.handleChange}
                id="username"
                type="text"
              />
              <p>Comment</p>
              <input
                name="commentInput"
                value={this.state.commentInput}
                onChange={this.handleChange}
                id="body"
                type="text"
              />
              <button onClick={this.addComment}>Add Comment</button>

              <CommentList comments={this.state.commentList} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  deleteComment = () => {
    const url = `https://nc-news808.herokuapp.com/api/comments`;
    Axios.delete(url).then(res => {
      console.log(res);
      this.setState({ commentInfo: res.data });
    });
  };

  handleCommentVote = amount => {
    console.log(this.state.commentList);
    console.log(this.state.commentList[0].comment_id);
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
    console.log(this.state.commentInput, this.state.userInput);
    Axios.post(url, {
      username: this.state.userInput,
      body: this.state.commentInput
    })
      .then(res => {
        this.setState(state => ({
          commentList: [res.data.comment, ...state.commentList]
        }));
        console.log(res);
      })
      .catch(err => console.log(err));
    // const name = this.state.nameInput;
    // this.setState({ nameInput: name });
    // console.log(event);
  };
}
