import React from "react";
import { Link } from "@reach/router";

export const ArticleList = props => {
  return (
    <div>
      {props.articles.slice(0, 1).map(article => {
        return (
          <div key={`${article.article_id}`}>
            <video
              className="latestPostVideo"
              src="Pexels Videos 2342561.mp4"
              height="400"
              width="500"
              autoPlay
              loop
            />

            <ul className="latestPostText">
              <h1>
                <Link className="articles" to={`${article.article_id}`}>
                  {article.title}
                </Link>
              </h1>
              <hr className="cardHr" />
              <h3>By: {article.author}</h3>
              <h3>Date created: {article.created_at}</h3>
              <h3>Comment count: {article.comment_count}</h3>
              <h3>Votes: {article.votes}</h3>
            </ul>
          </div>
        );
      })}

      <div className="articleCardsCon">
        {props.articles.slice(1, 20).map(article => {
          return (
            <div className="articleCard" key={article.article_id}>
              <div className="articleL">
                <Link className="articles" to={`${article.article_id}`}>
                  <h3> {article.title}</h3>
                  <hr className="cardHr" />
                  {article.author}
                </Link>
                {/* {props.created_at && ( */}
                <p>Date posted: {article.created_at.slice(0, 10)}</p>
                {/* )} */}
                {/* {props.comment_count && ( */}
                <p>Comment count: {article.comment_count}</p>
                {/* )} */}
                {/* {props.votes &&  ( */}
                <p>Votes: {article.votes}</p>
                {/* )} */}
                {/* <hr className="articleList" /> */}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
