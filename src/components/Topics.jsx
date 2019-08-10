import React from "react";
import { TopicList } from "./TopicList";
import { getTopics } from "../api.js";

export default class Students extends React.Component {
  state = {
    topicsList: null,
    loading: true
  };
  componentDidMount() {
    getTopics().then(topics => {
      this.setState({ topicsList: topics, loading: false });
    });
  }
  render() {
    return (
      <div className="centerText">
        <h2 className="title">Topics</h2>
        <hr className="hr" />
        {this.state.loading ? (
          <p>Loading...</p>
        ) : (
          <TopicList topics={this.state.topicsList} />
        )}
      </div>
    );
  }
}
