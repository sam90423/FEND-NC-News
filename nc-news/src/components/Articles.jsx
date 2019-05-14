import React from "react";
import { ArticleList } from "./ArticleList";
import { getArticles, sortArticles } from "../api.js";

export default class Articles extends React.Component {
  state = {
    articlesList: null
  };

  componentDidMount() {
    getArticles().then(articles => {
      this.setState({ articlesList: articles });
    });
  }

  render() {
    return (
      <div>
        <h2>Articles</h2>
        <button
          onClick={() =>
            sortArticles("created_at").then(articles => {
              this.setState({ articlesList: articles });
            })
          }
        >
          Most Recent
        </button>
        <button
          onClick={() =>
            sortArticles("votes").then(articles => {
              this.setState({ articlesList: articles });
            })
          }
        >
          Most Votes
        </button>
        <button
          onClick={() =>
            sortArticles("comment_count").then(articles => {
              this.setState({ articlesList: articles });
            })
          }
        >
          Most Comments
        </button>
        {this.state.articlesList && (
          <ArticleList articles={this.state.articlesList} />
        )}
      </div>
    );
  }
}
