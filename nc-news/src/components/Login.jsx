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
      <div>
        <form>
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
    checkValidUser(this.state.userNameInput)
      .then(user => {
        this.props.loginUserName(user.username);

        navigate(`/users/${user.username}`, {
          state: { directedFromLogin: true }
        });
      })
      .catch(err => {
        navigate("/error", {
          replace: true,
          state: { displayErr: err.msg }
        });
      });
  };

  logOutUser = event => {
    event.preventDefault();
    this.props.logOutUserName();
    navigate("/logoutpage");
  };
}
