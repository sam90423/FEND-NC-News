import React from "react";
import { navigate } from "@reach/router";
import { checkValidUser } from "../api.js";
// import Button from "@material-ui/core/Button";

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
    console.log(localStorage);
    const { userName, avatar, name } = this.state;
    return (
      <div className="loginCon">
        {localStorage.username ? (
          <div>
            <p>Welcome Back {userName}</p>
            <img src={avatar} alt="Avatar" />
            <p>Name: {name}</p>
            {/* <Button
              onClick={this.logOutUser}
              variant="outlined"
              color="primary"
            >
              Log Out
            </Button> */}
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
              {/* <Button
                onClick={this.loginUser}
                variant="outlined"
                color="secondary"
              >
                Log in
              </Button> */}
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
        localStorage.setItem("avatar", [user.avatar_url]);
        localStorage.setItem("name", [user.name]);
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
