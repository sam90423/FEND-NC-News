import React from "react";
import { navigate } from "@reach/router";
import { checkValidUser } from "../api.js";

export default class Login extends React.Component {
  state = {
    userNameInput: "",
    err: null,
    loginBox: true,
    name: "",
    avatar: "",
    userName: ""
  };

  componentDidMount() {
    const userName = localStorage.getItem("username");
    const avatar = localStorage.getItem("avatar");
    const name = localStorage.getItem("name");
    this.setState({ userName, avatar, name });
  }

  render() {
    const { userName, avatar } = this.state;

    return (
      <div>
        {localStorage.username ? (
          <div className="loggedIn">
            <div className="loginIcon">
              <img
                style={{ width: "50px", height: "50px" }}
                className="loginAvatar"
                src={avatar}
                alt="Avatar"
              />
            </div>
            <p className="loginName">Welcome {userName}</p>
            <button className="pageButton link" onClick={this.logOutUser}>
              Log Out
            </button>
          </div>
        ) : (
          <div className="loginBox">
            <form>
              <input
                value={this.state.userNameInput}
                onChange={this.handleChange}
                id="username"
                type="text"
                className="inputBox"
                placeholder="Username"
              />
              <br />
              <button className="pageButton" onClick={this.loginUser}>
                Log In
              </button>
            </form>
            <p className="loginName">
              jessjelly might
              <br /> work?
            </p>
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
        localStorage.setItem("username", [user.username]);
        localStorage.setItem("avatar", [user.avatar_url]);
        localStorage.setItem("name", [user.name]);
        this.props.loginUserName(user.username);
        this.setState({
          loginBox: false,
          name: user.name,
          avatar: user.avatar_url,
          userName: user.username
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
