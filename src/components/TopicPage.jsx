import React from "react";
import { getArticlesByTopic } from "../api.js";
import { Link, navigate } from "@reach/router";

export default class TopicPage extends React.Component {
  state = {
    topicInfo: [],
    relArticlesInfo: [],
    loading: true
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
            <h1>Articles:</h1>
            <hr className="hr" />
            <div className="articleCardsCon">
              {this.state.relArticlesInfo.map((article, index) => {
                return (
                  <div className="articleCard" key={index}>
                    <Link
                      className="articles"
                      to={`/articles/${article.article_id}`}
                    >
                      <h3> {article.title}</h3>
                      <hr className="cardHr" />
                      {article.author}
                    </Link>
                    <p>Date posted: {article.created_at.slice(0, 10)}</p>
                    <p>Comment count: {article.comment_count}</p>
                    <p>Votes: {article.votes}</p>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    );
  }
}
