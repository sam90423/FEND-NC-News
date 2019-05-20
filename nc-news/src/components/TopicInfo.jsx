import React from "react";
import { getArticlesByTopic } from "../api.js";
import { Link, navigate } from "@reach/router";

export default class Topic extends React.Component {
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
          <div>
            <h1 className="title">Topic</h1>
            <h2>{this.props.topicslug}</h2>
            <h1 className="title">Articles:</h1>
            {this.state.relArticlesInfo.map((article, index) => {
              return (
                <div className="articles" key={index}>
                  <Link to={`/articles/${article.article_id}`}>
                    {article.title}
                  </Link>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}
