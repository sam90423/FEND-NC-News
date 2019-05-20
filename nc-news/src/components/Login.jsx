import React from "react";
import { navigate } from "@reach/router";
import { checkValidUser } from "../api.js";

export default class Login extends React.Component {
  state = {
    userNameInput: "",
    err: null,
    loginBox: true
  };

  render() {
    return (
      <div className="loginCon">
        {this.state.loginBox ? (
          <div>
            <form className="login">
              Username:{" "}
              <input
                value={this.state.userNameInput}
                onChange={this.handleChange}
                id="username"
                type="text"
              />
              <button onClick={this.loginUser}>Log In</button>
            </form>
            <p>Maybe jessjelly might work?</p>
          </div>
        ) : (
          <div>
            <p>Welcome Back {this.state.userNameInput}</p>
            <button onClick={this.logOutUser}>Log Out</button>
          </div>
        )}
      </div>
    );
  }

  handleChange = event => {
    this.setState({ userNameInput: event.target.value });
  };

  loginUser = event => {
    event.preventDefault();
    console.log("always...");
    checkValidUser(this.state.userNameInput)
      .then(user => {
        localStorage.setItem("username", [user.username]);
        this.props.loginUserName(user.username);
        this.setState({ loginBox: false });
      })
      .catch(err => {
        navigate("/error", {
          replace: true,
          state: { displayErr: "Non-existent user" }
        });
      });
  };

  logOutUser = event => {
    event.preventDefault();
    this.props.logOutUserName();
    this.setState({ loginBox: true, userNameInput: "" });
    // navigate("/logoutpage");
  };
}
