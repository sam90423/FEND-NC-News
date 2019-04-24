import React from "react";
import { Link } from "@reach/router";

export const ArticleList = props => {
  return (
    <div>
      {props.articles.slice(0, 20).map(article => {
        return (
          <div key={article.article_id}>
            <Link to={`${article.article_id}`}>{article.title}</Link>
          </div>
        );
      })}
    </div>
  );
};
