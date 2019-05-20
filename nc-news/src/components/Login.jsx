import React from "react";
import { navigate } from "@reach/router";
import { checkValidUser } from "../api.js";

export default class Login extends React.Component {
  state = {
    userNameInput: "",
    err: null,
    loginBox: true,
    name: "",
    avatar: ""
  };

  render() {
    return (
      <div className="loginCon">
        {localStorage.getItem("username") ? (
          <div>
            <p>Welcome Back {localStorage.getItem("username")}</p>
            <img src={this.state.avatar} alt="Avatar" />
            <p>Name: {this.state.name}</p>
            <button onClick={this.logOutUser}>Log Out</button>
          </div>
        ) : (
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
        )}
      </div>
    );
  }

  handleChange = event => {
    this.setState({ userNameInput: event.target.value });
  };

  loginUser = event => {
    event.preventDefault();
    checkValidUser(this.state.userNameInput)
      .then(user => {
        console.log(user);
        localStorage.setItem("username", [user.username]);
        this.props.loginUserName(user.username);
        this.setState({
          loginBox: false,
          name: user.name,
          avatar: user.avatar_url
        });
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
  };
}
