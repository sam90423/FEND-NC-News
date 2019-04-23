import React from "react";
import Axios from "axios";
import { DeleteButton } from "./DeleteButton";
import { Vote } from "./Vote";

export default class Article extends React.Component {
  state = {
    articleInfo: null,
    commentList: null,
    commentInput: ""
  };
  componentDidMount() {
    const articleUrl = `https://nc-student-tracker.herokuapp.com/api/students/${
      this.props.articleid
    }`;

    Axios.get(articleUrl).then(({ data: { article } }) => {
      this.setState({ articleInfo: article });
    });
    const commentUrl = `https://nc-student-tracker.herokuapp.com/api/${
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
        {this.state.articleInfo && (
          <div>
            <p>Title: {this.state.articleInfo.title}</p>
            <p>Topic: {this.state.articleInfo.topic}</p>
            <p>Author: {this.state.articleInfo.author}</p>
            <p>Body:{this.state.articleInfo.body}</p>
            <p>Votes: {this.state.articleInfo.votes}</p>
            <Vote vote={this.vote} />

            <h3>Add New Comment</h3>
            <input
              name="commentInput"
              value={this.state.commentInput}
              onChange={this.handleChange}
              id="name"
              type="text"
            />
            <button onClick={this.addComment}>Add Comment</button>

            <h3>Comments:</h3>
            <div>
              {this.state.comments.map((comment, index) => {
                return (
                  <div className="comments" key={index}>
                    <p>Created At: {comment.created_at}</p>
                    <p>Author: {comment.author}</p>
                    <p>Body: {comment.body}</p>
                    <p>Votes: {comment.votes}</p>
                    <Vote votes={this.votes} />
                    <DeleteButton deleteComment={this.deleteComment} />
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    );
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  deleteComment = () => {
    const url = `https://nc-student-tracker.herokuapp.com/api/comments/${
      this.props.commentid
    }`;
    Axios.delete(url).then(res => {
      console.log(res);
      this.setState({ commentInfo: res.data });
    });
  };

  addComment = event => {
    event.preventDefault();
    const url = "https://nc-student-tracker.herokuapp.com/api/comments";
    Axios.post(url, {
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
