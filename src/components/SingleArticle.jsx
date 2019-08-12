import React from "react";

export const SingleArticle = props => {
  return (
    <div className="centerText">
      <div>
        <h1 className="articleTitle">{props.article.title}</h1>
        <hr className="hr" />
        <div className="sortButtonsCon">
          <h3 className="articleDetails">
            By <br />
            {props.article.author}{" "}
          </h3>

          <h3 className="articleDetails">
            Topic <br />
            {props.article.topic}
          </h3>
          <h3>
            Date <br />
            {props.article.created_at.slice(0, 10)}
          </h3>
        </div>
        <p className="article">{props.article.body}</p>
        <h3>Votes: {props.article.votes + props.articleVoteCount}</h3>
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
