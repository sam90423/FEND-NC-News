import React from "react";
import Axios from "axios";
import { ArticleList } from "./ArticleList";

export default class Students extends React.Component {
  state = {
    articlesList: null
  };
  componentDidMount() {
    const articleUrl = "https://nc-student-tracker.herokuapp.com/api/students";
    Axios.get(articleUrl).then(({ data: { articles } }) => {
      this.setState({ articleList: articles });
    });
  }
  render() {
    return (
      <div>
        <h2>Articles</h2>

        {this.state.articlesList && (
          <ArticleList articles={this.state.articlesList} />
        )}
      </div>
    );
  }
}
