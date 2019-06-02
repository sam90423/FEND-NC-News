import React from "react";
import { Link } from "@reach/router";

export const TopicList = props => {
  return (
    <div>
      {props.topics.slice(0, 20).map(topic => {
        return (
          <div key={topic.slug} className="articleL">
            <Link className="articles" to={`${topic.slug}`}>
              {topic.slug}
            </Link>
            <hr className="articleList" />
          </div>
        );
      })}
    </div>
  );
};