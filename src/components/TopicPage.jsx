import React from "react";
import { getArticlesByTopic, sortArticles } from "../api.js";
import { Link, navigate } from "@reach/router";

export default class TopicPage extends React.Component {
  state = {
    topicInfo: [],
    relArticlesInfo: [],
    loading: true,
    commentCount: false,
    created_at: false,
    votes: false
  };
  componentDidMount() {
    getArticlesByTopic(this.props.topicslug)
      .then(articles => {
        this.setState({ relArticlesInfo: articles, loading: false });
      })
      .catch(err => {
        navigate("/error", {
          replace: true,
          state: { displayErr: "Non existent topic" }
        });
      });
  }
  render() {
    return (
      <div>
        {this.state.loading ? (
          <p>Loading...</p>
        ) : (
          <div className="centerText">
            <h1>Topic</h1>
            <hr className="hr" />
            <h2 className="title">{this.props.topicslug}</h2>
            <div className="sortButtonsCon">
              <div>
                <button
                  className="sortButton"
                  onClick={() =>
                    sortArticles("created_at").then(articles => {
                      this.setState({
                        relArticlesInfo: articles,
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
                        relArticlesInfo: articles,
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
                        relArticlesInfo: articles,
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
            <div className="articleCardsCon">
              {this.state.relArticlesInfo.map((article, index) => {
                return (
                  <Link
                    className="articleCard"
                    key={index}
                    to={`/articles/${article.article_id}`}
                  >
                    <h3 className="articles"> {article.title}</h3>
                    <hr className="cardHr" />
                    <p className="articles">{article.author}</p>
                    <p className="articles">
                      Date posted: {article.created_at.slice(0, 10)}
                    </p>
                    <p className="articles">
                      Comment count: {article.comment_count}
                    </p>
                    <p className="articles">Votes: {article.votes}</p>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    );
  }
}
