import React from "react";

export default class Error extends React.Component {
  render() {
    console.log(this.props);
    const { displayErr } = this.props.location.state;

    return (
      <div>
        <h1>Sorry something went wrong there</h1>
        <p>{displayErr}</p>
      </div>
    );
  }
}
