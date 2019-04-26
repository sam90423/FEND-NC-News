import React from "react";
import Axios from "axios";
import { navigate } from "@reach/router";

export default class Login extends React.Component {
  state = {
    userNameInput: ""
  };

  render() {
    return (
      <div>
        <input
          value={this.state.userNameInput}
          onChange={this.handleChange}
          id="username"
          type="text"
        />
        <button onClick={this.loginUser}>Log In</button>
      </div>
    );
  }

  handleChange = event => {
    this.setState({ userNameInput: event.target.value });
  };

  checkValidUser = user => {
    const url = `https://nc-news808.herokuapp.com/api/users/${user}`;
    return Axios.get(url).then(({ data: { user } }) => {
      return user;
    });
  };

  loginUser = event => {
    event.preventDefault();
    this.checkValidUser(this.state.userNameInput).then(user => {
      this.props.loginUserName(user[0].username);
      navigate(`/users/${user[0].username}`, {
        state: { directedFromLogin: true }
      });
    });
  };
}
