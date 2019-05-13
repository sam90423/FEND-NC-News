import React from "react";
import { Link } from "@reach/router";
import Login from "./Login";

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>NC-News</h1>
        <Login
          loginUserName={this.props.loginUserName}
          logOutUserName={this.props.logOutUserName}
        />
        <nav>
          <Link to="/">Home</Link>
          <Link to="/articles">Articles</Link>
          <Link to="/topics">Topics</Link>
        </nav>
      </div>
    );
  }
}
