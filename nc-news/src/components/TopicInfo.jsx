import React from "react";
import Axios from "axios";

export default class Topic extends React.Component {
  state = {
    topicInfo: [],
    relArticlesInfo: []
  };
  componentDidMount() {
    const topicUrl = `https://nc-news808.herokuapp.com/api/topics/${
      this.props.topicslug
    }`;

    const articleUrl = `https://nc-news808.herokuapp.com/api/articles?topic=${
      this.props.topicslug
    }`;

    Axios.get(articleUrl).then(({ data: { articles } }) => {
      console.log(articles);
      this.setState({ relArticlesInfo: articles });
      console.log(this.state.relArticleInfo);
    });

    Axios.get(topicUrl).then(({ data: { topic } }) => {
      console.log(topic);
      this.setState({ topicInfo: topic });
      console.log(this.state.topicInfo);
    });
  }
  render() {
    return (
      <div>
        <h1>Topic</h1>
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
