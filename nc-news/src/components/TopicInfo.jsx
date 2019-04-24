import React from "react";
import Axios from "axios";

export default class Topic extends React.Component {
  state = {
    topicInfo: null,
    relArticlesInfo: null
  };
  componentDidMount() {
    const topicUrl = `https://nc-student-tracker.herokuapp.com/api/topics/${
      this.props.topic.slug
    }`;

    const articleUrl = `https://nc-student-tracker.herokuapp.com/api/articles?topic=${
      this.props.topic.slug
    }`;

    Axios.get(articleUrl).then(({ data: { articles } }) => {
      this.setState({ relArticlesInfo: articles });
    });

    Axios.get(topicUrl).then(({ data: { topic } }) => {
      this.setState({ topicInfo: topic });
    });
  }
  render() {
    return (
      <div>
        <h1>Topic</h1>
        {this.state.articleInfo && (
          <div>
            <div>
              <p>Topic: {this.state.topicInfo.slug}</p>
              <p>Body: {this.state.topicInfo.body}</p>
            </div>

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
        )}
      </div>
    );
  }
}
