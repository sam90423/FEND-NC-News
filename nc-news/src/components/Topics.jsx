import React from "react";
import { TopicList } from "./TopicList";
import { getTopics } from "../api.js";

export default class Students extends React.Component {
  state = {
    topicsList: null
  };
  componentDidMount() {
    getTopics().then(topics => {
      this.setState({ topicsList: topics });
    });
  }
  render() {
    return (
      <div>
        <h2>Topics</h2>

        {this.state.topicsList && <TopicList topics={this.state.topicsList} />}
      </div>
    );
  }
}
