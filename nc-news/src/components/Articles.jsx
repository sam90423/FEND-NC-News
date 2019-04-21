import React from "react";
import Axios from "axios";
import { ArticleList } from "./StudentList";

export default class Students extends React.Component {
  state = {
    articlesList: null
  };
  componentDidMount() {
    const url = "https://nc-student-tracker.herokuapp.com/api/students";
    Axios.get(url).then(({ data: { articles } }) => {
      this.setState({ articleList: articles });
    });
  }
  render() {
    return (
      <div>
        <h2>Articles</h2>

        {this.state.articlesList && (
          <ArticlesList articles={this.state.articlesList} />
        )}
      </div>
    );
  }
}
