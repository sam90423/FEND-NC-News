import React from "react";
import Axios from "axios";
import { ArticleList } from "./ArticleList";

export default class Articles extends React.Component {
  state = {
    articlesList: null
  };
  componentDidMount() {
    //  console.log("asd");
    const articleUrl = "https://nc-news808.herokuapp.com/api/articles";
    Axios.get(articleUrl).then(({ data: { articles } }) => {
      //console.log(articles);
      this.setState({ articlesList: articles }, () => {
        // console.log(this.state, "ehhef");
      });
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
