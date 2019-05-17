import React from "react";

export const SingleArticle = props => {
  const articlesArr = [];
  articlesArr.push(props.articles);
  console.log(articlesArr);
  return (
    <div>
      {articlesArr.map(article => {
        console.log(article);
        return (
          <div>
            <p>Title: {article.title}</p>
            <p>Topic: {article.topic}</p>
            <p>Author: {article.author}</p>
            <p>Body: {article.body}</p>
            <p>Votes: {article.votes + props.articleVoteCount}</p>
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
