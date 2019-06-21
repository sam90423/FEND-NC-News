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
            <h2>{this.props.topicslug}</h2>
            <h1>Articles:</h1>
            <hr className="hr" />
            {this.state.relArticlesInfo.map((article, index) => {
              return (
                <div className="articles" key={index}>
                  <Link
                    className="articles"
                    to={`/articles/${article.article_id}`}
                  >
                    {article.title}
                  </Link>
                  <hr className="articleList" />
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}
