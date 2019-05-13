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
import Error from "./components/Error";
import { LogOutPage } from "./components/LogOutPage";

class App extends Component {
  state = {
    loginUser: ""
  };

  render() {
    return (
      <div className="App">
        <Header
          loginUserName={this.loginUserName}
          logOutUserName={this.logOutUserName}
        />
        <Router>
          <Home path="/" />
          <Articles path="/articles" />
          <Article
            path="/articles/:articleid"
            loginUser={this.state.loginUser}
          />
          <Topics path="/topics" />
          <Topic path="/topics/:topicslug" />
          <User path="/users/:username" />
          <Error path="/error" />
          <LogOutPage path="/logoutpage" />
        </Router>
      </div>
    );
  }

  loginUserName = username => {
    this.setState({ loginUser: username });
  };

  logOutUserName = () => {
    this.setState({ loginUser: "" });
  };
}

export default App;
