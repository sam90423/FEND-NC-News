import React from "react";
import { Link } from "@reach/router";

export const ArticleList = props => {
  return (
    <div>
      {props.articles.slice(0, 20).map(article => {
        console.log(article.comment_count);
        return (
          <div key={article.article_id} className="articleL">
            <Link to={`${article.article_id}`}>{article.title}</Link>
            {this.props.created_at && (
              <p>Date created: {article.comment_count}</p>
            )}
            {this.props.comment_count && (
              <p>Comment Count: {article.comment_count}</p>
            )}
          </div>
        );
      })}
    </div>
  );
};
