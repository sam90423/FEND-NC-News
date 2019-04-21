import React from "react";
import Axios from "axios";
import { DeleteComment } from "./DeleteComment";
import { AddComment } from "./AddComment";

export default class Article extends React.Component {
  state = {
    articleInfo: null,
    comments: null
  };
  componentDidMount() {
    const url = `https://nc-student-tracker.herokuapp.com/api/students/${
      this.props.articleid
    }`;

    Axios.get(url).then(({ data: { article } }) => {
      this.setState({ articleInfo: article });
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

            <h3>Comments:</h3>
            <div>
              {this.state.comments.map((comment, index) => {
                return (
                  <div className="comments" key={index}>
                    <p>Created At: {comment.created_at}</p>
                    <p>Author: {comment.author}</p>
                    <p>Body: {comment.body}</p>
                    <p>Votes: {comment.votes}</p>
                  </div>
                );
              })}
            </div>
            <AddComment addComment={this.addComment} />
            <DeleteComment deleteComment={this.deleteComment} />
          </div>
        )}
      </div>
    );
  }
}
