import React from "react";
import Axios from "axios";
import { ArticleList } from "./ArticleList";

export default class Articles extends React.Component {
  state = {
    articlesList: null
  };

  sortArticles = sort_by => {
    const url = `https://nc-news808.herokuapp.com/api/articles?sort_by=${sort_by}`;
    Axios.get(url).then(({ data: { articles } }) => {
      this.setState({ articlesList: articles });
    });
  };

  componentDidMount() {
    const articleUrl = "https://nc-news808.herokuapp.com/api/articles";
    Axios.get(articleUrl).then(({ data: { articles } }) => {
      this.setState({ articlesList: articles });
    });
  }

  render() {
    return (
      <div>
        <h2>Articles</h2>
        <button onClick={() => this.sortArticles("created_at")}>
          Most Recent
        </button>
        <button onClick={() => this.sortArticles("votes")}>Most Votes</button>
        <button onClick={() => this.sortArticles("comment_count")}>
          Most Comments
        </button>
        {this.state.articlesList && (
          <ArticleList articles={this.state.articlesList} />
        )}
      </div>
    );
  }
}
