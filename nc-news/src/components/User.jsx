import React from "react";

export default class User extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome Back {this.props.username}</h1>
      </div>
    );
  }
}
