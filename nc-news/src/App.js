import React, { Component } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Router } from "@reach/router";
import Home from "./components/Home";
import Articles from "./components/Articles";
import Article from "./components/ArticleInfo";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Router>
          <Home path="/" />
          <Articles path="/articles" />
          <Article path="/articles/:articleid" />
        </Router>
      </div>
    );
  }
}

export default App;
