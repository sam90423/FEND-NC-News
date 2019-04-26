import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import { Router } from "@reach/router";
import Home from "./components/Home";
import Articles from "./components/Articles";
import Article from "./components/ArticleInfo";
import Topics from "./components/Topics";
import Topic from "./components/TopicInfo";
import User from "./components/User";

class App extends Component {
  state = {
    loginUser: ""
  };

  render() {
    return (
      <div className="App">
        <Header loginUserName={this.loginUserName} />
        <Router>
          <Home path="/" />
          <Articles path="/articles" />
          <Article path="/articles/:articleid" />
          <Topics path="/topics" />
          <Topic path="/topics/:topicslug" />
          <User path="/users/:username" />
        </Router>
      </div>
    );
  }

  loginUserName = username => {
    this.setState({ loginUser: username });
  };
}

export default App;
