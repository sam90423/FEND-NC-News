import React from "react";
import { ArticleList } from "./ArticleList";
import { getArticles, sortArticles } from "../api.js";

export default class Articles extends React.Component {
  state = {
    articlesList: null,
    disabled: false,
    loading: true,
    commentCount: false,
    created_at: false,
    votes: false
  };

  componentDidMount() {
    getArticles().then(articles => {
      this.setState({ articlesList: articles, loading: false });
    });
  }

  render() {
    return (
      <div className="centerText">
        <h2 className="title">Articles</h2>

        <div className="sortButtonsCon">
          <div>
            <button
              className="sortButton"
              onClick={() =>
                sortArticles("created_at").then(articles => {
                  this.setState({
                    articlesList: articles,
                    created_at: true,
                    comment_count: false,
                    votes: false
                  });
                })
              }
            >
              Most <br /> Recent
            </button>
          </div>
          <div>
            <button
              className="sortButton"
              onClick={() =>
                sortArticles("votes").then(articles => {
                  this.setState({
                    articlesList: articles,
                    votes: true,
                    comment_count: false,
                    created_at: false
                  });
                })
              }
            >
              Most
              <br />
              Votes
            </button>
          </div>

          <div>
            <button
              className="sortButton"
              onClick={() =>
                sortArticles("comment_count").then(articles => {
                  this.setState({
                    articlesList: articles,
                    comment_count: true,
                    created_at: false,
                    votes: false
                  });
                })
              }
            >
              Most <br /> Comments
            </button>
          </div>
        </div>
        <hr className="hr" />

        {this.state.loading ? (
          <p>Loading...</p>
        ) : (
          <ArticleList
            created_at={this.state.created_at}
            comment_count={this.state.comment_count}
            votes={this.state.votes}
            articles={this.state.articlesList}
          />
        )}
      </div>
    );
  }
}
