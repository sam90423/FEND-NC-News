import React from "react";
import Axios from "axios";
import { DeleteButton } from "./DeleteButton";

export default class Article extends React.Component {
  state = {
    articleInfo: [],
    commentList: [],
    commentInput: "",
    userInput: ""
  };
  componentDidMount() {
    const articleUrl = `https://nc-news808.herokuapp.com/api/articles/${
      this.props.articleid
    }`;
    console.log(this.props.articleid);
    Axios.get(articleUrl).then(({ data: { article } }) => {
      this.setState({ articleInfo: article });
      console.log(this.state.articleInfo[0].title);
    });

    this.fetchComments();
  }

  fetchComments() {
    const commentUrl = `https://nc-news808.herokuapp.com/api/articles/${
      this.props.articleid
    }/comments`;

    Axios.get(commentUrl).then(({ data: { comments } }) => {
      this.setState({ commentList: comments });
      console.log(this.state.comments);
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.commentList !== prevState.commentList) {
      this.fetchComments();
    }
  }
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

              {this.state.commentList.map((comment, index) => {
                return (
                  <div className="comments" key={index}>
                    <p>Created At: {comment.created_at}</p>
                    <p>Author: {comment.author}</p>
                    <p>Body: {comment.body}</p>
                    <p>Votes: {comment.votes}</p>
                    <DeleteButton deleteComment={this.deleteComment} />
                  </div>
                );
              })}
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
      .then(result => {
        console.log(result);
      })
      .catch(err => console.log(err));
    // const name = this.state.nameInput;
    // this.setState({ nameInput: name });
    // console.log(event);
  };
}
