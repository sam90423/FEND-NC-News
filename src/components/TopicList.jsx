import React from "react";
import { Link } from "@reach/router";

export const TopicList = props => {
  return (
    <div className="topicCardsCon">
      {props.topics.slice(0, 1).map(topic => {
        return (
          <div key={topic.slug}>
            <Link className="articles" to={`${topic.slug}`}>
              <h2>{topic.slug}</h2>
            </Link>
            <hr className="cardHr" />
            <Link to={`${topic.slug}`}>
              <video
                className="latestPostVideo"
                src="Codes - 23355.mp4"
                height="325"
                width="500"
                autoPlay
                loop
              />
            </Link>
          </div>
        );
      })}

      {props.topics.slice(1, 2).map(topic => {
        return (
          <div key={topic.slug}>
            <Link className="articles" to={`${topic.slug}`}>
              <h2>{topic.slug}</h2>
            </Link>
            <hr className="cardHr" />
            <Link to={`${topic.slug}`}>
              <video
                className="latestPostVideo"
                src="Football - 15734.mp4"
                height="325"
                width="500"
                autoPlay
                loop
              />
            </Link>
          </div>
        );
      })}

      {props.topics.slice(2, 3).map(topic => {
        return (
          <div key={topic.slug}>
            <Link className="articles" to={`${topic.slug}`}>
              <h2>{topic.slug}</h2>
            </Link>
            <hr className="cardHr" />
            <Link to={`${topic.slug}`}>
              <video
                className="latestPostVideo"
                src="Food - 24999.mp4"
                height="325"
                width="500"
                autoPlay
                loop
              />
            </Link>
          </div>
        );
      })}
    </div>
  );
};
