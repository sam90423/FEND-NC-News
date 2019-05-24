import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import { Router } from "@reach/router";
import Home from "./components/Home";
import Articles from "./components/Articles";
import Article from "./components/ArticlePage";
import Topics from "./components/Topics";
import Topic from "./components/TopicPage";
import Error from "./components/Error";

class App extends Component {
  state = {
    loginUser: localStorage.getItem("username")
  };

  render() {
    return (
      <div className="App mainConPadLR mainConPadT">
        <Header
          loginUserName={this.loginUserName}
          logOutUserName={this.logOutUserName}
          loginUser={this.state.loginUser}
        />
        <div className="content">
          <Router>
            <Home path="/" />
            <Articles path="/articles" />
            <Article
              path="/articles/:articleid"
              loginUser={this.state.loginUser}
            />
            <Topics path="/topics" />
            <Topic path="/topics/:topicslug" />
            <Error path="/error" default />
          </Router>
        </div>
      </div>
    );
  }

  loginUserName = username => {
    this.setState({ loginUser: localStorage.getItem("username") });
  };

  logOutUserName = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("avatar");
    localStorage.removeItem("name");
    this.setState({ loginUser: "" });
  };
}

export default App;
