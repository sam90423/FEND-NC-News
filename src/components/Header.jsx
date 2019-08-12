import React from "react";
import { Link } from "@reach/router";
import Login from "./Login";

export default class Header extends React.Component {
  render() {
    return (
      <div className="topBar">
        <div className="headerCon">
          <h1 className="topTitle">NC News</h1>
          <nav className="buttonsCon">
            <button className="button1 pageButton">
              <Link className="link" to="/">
                Articles
              </Link>
            </button>
            <button className="button2 pageButton">
              <Link className="link" to="/topics">
                Topics
              </Link>
            </button>
          </nav>
          <Login
            className="login"
            loginUser={this.props.loginUser}
            loginUserName={this.props.loginUserName}
            logOutUserName={this.props.logOutUserName}
          />
        </div>
      </div>
    );
  }
}
