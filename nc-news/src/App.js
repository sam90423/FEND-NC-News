import React, { Component } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Router } from "@reach/router";
import Home from "./components/Home";
import Articles from "./components/Articles";
import Article from "./components/ArticleInfo";
import Topics from "./components/Topics";
import Topic from "./components/TopicInfo";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Router>
          <Home path="/" />
          <Articles path="/articles" />
          <Article path="/articles/:articleid" />
          <Topics path="/topics" />
          <Topic path="/articles/:articleid?topic=cats" />
        </Router>
      </div>
    );
  }
}

export default App;
