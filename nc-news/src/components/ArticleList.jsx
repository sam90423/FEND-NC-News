import React from "react";
import { Link } from "@reach/router";

export const ArticleList = props => {
  return (
    <div>
      {props.articles.slice(0, 20).map(article => {
        return (
          <div key={article._id}>
            <Link to={`${article._id}`}>{article.title}</Link>
          </div>
        );
      })}
    </div>
  );
};
