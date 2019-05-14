import React from "react";
import { getArticlesByTopic } from "../api.js";

export default class Topic extends React.Component {
  state = {
    topicInfo: [],
    relArticlesInfo: []
  };
  componentDidMount() {
    getArticlesByTopic(this.props.topicslug).then(articles => {
      this.setState({ relArticlesInfo: articles });
    });
  }
  render() {
    // console.log(this.state.relArticlesInfo[0].topic);
    return (
      <div>
        <h1>Topic</h1>
        {/* {this.state.relArticlesInfo && (
          <h2>{this.state.relArticlesInfo[0].topic}</h2>
        )} */}

        {this.state.topicInfo.map(topic => {
          return (
            <div>
              <p>Topic: {topic.slug}</p>
              <p>Body: {topic.body}</p>
            </div>
          );
        })}

        <h1>Articles:</h1>
        <div>
          {this.state.relArticlesInfo.map((article, index) => {
            return (
              <div className="articles" key={index}>
                <p>Created At: {article.created_at}</p>
                <p>Author: {article.author}</p>
                <p>Body: {article.body}</p>
                <p>Votes: {article.votes}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
