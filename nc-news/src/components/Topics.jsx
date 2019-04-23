import React from "react";
import Axios from "axios";
import { TopicList } from "./TopicList";

export default class Students extends React.Component {
  state = {
    topicsList: null
  };
  componentDidMount() {
    const topicUrl = "https://nc-student-tracker.herokuapp.com/api/topics";
    Axios.get(topicUrl).then(({ data: { topics } }) => {
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
