import React from "react";
import { Link } from "@reach/router";

export const ArticleList = props => {
  return (
    <div>
      {props.articles.slice(0, 20).map(article => {
        console.log(article.article_id);
        return (
          <div key={article.article_id} className="articleL">
            <Link to={`${article.article_id}`}>{article.title}</Link>
          </div>
        );
      })}
    </div>
  );
};
