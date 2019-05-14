import React from "react";

export const SingleArticle = props => {
  return (
    <div>
      {props.articles.map(article => {
        return (
          <div key={article.article_id}>
            <p>Title: {article.title}</p>
            <p>Topic: {article.topic}</p>
            <p>Author: {article.author}</p>
            <p>Body: {article.body}</p>
            <p>Votes: {article.votes}</p>
            <p>Votes: {props.articleVoteCount}</p>
            {props.loginUser && (
              <div>
                <button name="yes" onClick={() => props.handleArticleVote(1)}>
                  YES!
                </button>
                <button name="yes" onClick={() => props.handleArticleVote(-1)}>
                  NO!
                </button>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
