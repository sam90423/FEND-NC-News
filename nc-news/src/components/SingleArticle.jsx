import React from "react";

export const SingleArticle = props => {
  return (
    <div>
      <div>
        <p>Title: {props.article.title}</p>
        <p>Topic: {props.article.topic}</p>
        <p>Author: {props.article.author}</p>
        <p>Body: {props.article.body}</p>
        <p>Votes: {props.article.votes + props.articleVoteCount}</p>
        {props.loginUser && (
          <div>
            <button
              disabled={props.articleVoteCount === 1}
              name="yes"
              onClick={() =>
                props.handleArticleVote(1, props.article.article_id, "articles")
              }
            >
              YES!
            </button>
            <button
              disabled={props.articleVoteCount === -1}
              name="no"
              onClick={() =>
                props.handleArticleVote(
                  -1,
                  props.article.article_id,
                  "articles"
                )
              }
            >
              NO!
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
