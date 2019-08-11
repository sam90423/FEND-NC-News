import React from "react";
import { Link } from "@reach/router";

export const ArticleList = props => {
  return (
    <div>
      {props.articles.slice(0, 1).map(article => {
        return (
          <div key={`${article.article_id}`}>
            <Link to={`${article.article_id}`}>
              <video
                className="latestPostVideo"
                src="Pexels Videos 2342561.mp4"
                height="400"
                width="500"
                autoPlay
                loop
              />
            </Link>

            <ul className="latestPostText">
              <Link className="articles" to={`${article.article_id}`}>
                <h1 className="articles">{article.title}</h1>
              </Link>

              <hr className="cardHr" />
              <h3 className="articles">By: {article.author}</h3>
              <h3 className="articles">Date created: {article.created_at}</h3>
              <h3 className="articles">
                Comment count: {article.comment_count}
              </h3>
              <h3 className="articles">Votes: {article.votes}</h3>
            </ul>
          </div>
        );
      })}

      <div className="articleCardsCon">
        {props.articles.slice(1, 20).map(article => {
          return (
            <Link className="articleCard" to={`${article.article_id}`}>
              <div key={article.article_id}>
                <div className="articleL">
                  <Link to={`${article.article_id}`} className="cardLink">
                    <h3 className="articles"> {article.title}</h3>
                    <hr className="cardHr" />
                    <p className="articles">{article.author}</p>
                  </Link>
                  {/* {props.created_at && ( */}
                  <p className="articles">
                    Date posted: {article.created_at.slice(0, 10)}
                  </p>
                  {/* )} */}
                  {/* {props.comment_count && ( */}
                  <p className="articles">
                    Comment count: {article.comment_count}
                  </p>
                  {/* )} */}
                  {/* {props.votes &&  ( */}
                  <p className="articles">Votes: {article.votes}</p>
                  {/* )} */}
                  {/* <hr className="articleList" /> */}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
