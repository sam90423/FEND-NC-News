import React from "react";
import { Link } from "@reach/router";
import Login from "./Login";
import Button from "@material-ui/core/Button";

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>NC-News</h1>
        <Login
          loginUser={this.props.loginUser}
          loginUserName={this.props.loginUserName}
          logOutUserName={this.props.logOutUserName}
        />
        <nav className="buttonsCon">
          <Button className="button1" variant="outlined" color="primary">
            <Link className="link" to="/">
              Home
            </Link>
          </Button>
          <Button className="button2" variant="outlined" color="primary">
            <Link className="link" to="/articles">
              Articles
            </Link>
          </Button>
          <Button className="button3" variant="outlined" color="primary">
            <Link className="link" to="/topics">
              Topics
            </Link>
          </Button>
        </nav>
      </div>
    );
  }
}
