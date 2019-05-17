import React from "react";
import { navigate } from "@reach/router";
import { checkValidUser } from "../api.js";

export default class Login extends React.Component {
  state = {
    userNameInput: "",
    err: null
  };

  render() {
    return (
      <div className="loginCon">
        <form className="login">
          Username:{" "}
          <input
            value={this.state.userNameInput}
            onChange={this.handleChange}
            id="username"
            type="text"
          />
          <button onClick={this.loginUser}>Log In</button>
          <button onClick={this.logOutUser}>Log Out</button>
        </form>
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
        //if (user.length === 0) return Promise.reject("Non-existent user");

        this.props.loginUserName(user.username);
        this.setState({ userNameInput: "" });
        navigate(`/users/${user.username}`, {
          state: { directedFromLogin: true }
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
    this.setState({ userNameInput: "" });
    navigate("/logoutpage");
  };
}
