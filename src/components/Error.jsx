import React from "react";

export default class Error extends React.Component {
  render() {
    return (
      <div>
        <h1>Sorry something went wrong there</h1>
        {this.props.location.state ? (
          <p>{this.props.location.state.displayErr}</p>
        ) : (
          <p>Sorry wrong route</p>
        )}
      </div>
    );
  }
}
