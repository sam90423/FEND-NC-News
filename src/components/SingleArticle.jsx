import React from "react";

export const SingleArticle = props => {
  return (
    <div className="centerText">
      <div>
        <h1>{props.article.title}</h1>
        <h3>{props.article.topic}</h3>
        <p>{props.article.author}</p>
        <p>{props.article.created_at.slice(0, 10)}</p>
        <p>{props.article.body}</p>
        <p>Votes: {props.article.votes + props.articleVoteCount}</p>
        {props.loginUser && (
          <div>
            <button
              disabled={props.articleVoteCount === 1}
              name="yes"
              className="sortButton"
              onClick={() =>
                props.handleArticleVote(1, props.article.article_id, "articles")
              }
            >
              LIKE
            </button>
            <button
              disabled={props.articleVoteCount === -1}
              name="no"
              className="sortButton"
              onClick={() =>
                props.handleArticleVote(
                  -1,
                  props.article.article_id,
                  "articles"
                )
              }
            >
              DISLIKE
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
