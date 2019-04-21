import React from "react";
import { Link } from "@reach/router";

export const Header = () => {
  return (
    <div>
      <h1>NC-News</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/articles">Articles</Link>
      </nav>
    </div>
  );
};
