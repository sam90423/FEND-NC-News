import React from "react";
import { Link } from "@reach/router";

export const ArticleList = props => {
  return (
    <div>
      {props.articles.slice(0, 20).map(article => {
        return (
          <div key={article.article_id} className="articleL">
            <Link className="articles" to={`${article.article_id}`}>
              {article.title} <br />
              <br />
              {article.author}
            </Link>
            {props.created_at && (
              <p>Date created: {article.created_at.slice(0, 10)}</p>
            )}
            {props.comment_count && (
              <p>Comment Count: {article.comment_count}</p>
            )}
            {props.votes && <p>Votes: {article.votes}</p>}
            <hr className="articleList" />
          </div>
        );
      })}
    </div>
  );
};
