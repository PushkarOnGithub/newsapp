import "./App.css";
import React, { Component } from "react";
import News from "./components/News";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  // apikey = process.env.NEWS_API_KEY
  apikey = "77905f0c5a264e0890cf2dbc03426546"
  pageSize = 6;

    state = {
      progress: 0,
    };
  setProgress = (progress) => {
    this.setState({ progress: progress });
  };
  render() {
    return (
      <>
        <Router>
          <Navbar />
          <LoadingBar
            color="#f11946"
            progress={this.state.progress}
            height={3}
          />

          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                pageSize={this.pageSize}
                country="in"
                category="general"
                key="general"
                apikey={this.apikey}
                setProgress={this.setProgress}
                />
              }
            >
              general
            </Route>
            <Route
              exact
              path="/business"
              element={
                <News
                pageSize={this.pageSize}
                country="in"
                category="business"
                key="business"
                apikey={this.apikey}
                setProgress={this.setProgress}
                />
              }
            >
              business
            </Route>
            <Route
              exact
              path="/entertainment"
              element={
                <News
                pageSize={this.pageSize}
                country="in"
                category="entertainment"
                key="entertainment"
                apikey={this.apikey}
                setProgress={this.setProgress}
                />
              }
            >
              entertainment
            </Route>
            <Route
              exact
              path="/health"
              element={
                <News
                pageSize={this.pageSize}
                country="in"
                category="health"
                key="health"
                apikey={this.apikey}
                setProgress={this.setProgress}
                />
              }
            >
              health
            </Route>
            <Route
              exact
              path="/science"
              element={
                <News
                pageSize={this.pageSize}
                country="in"
                category="science"
                key="science"
                apikey={this.apikey}
                setProgress={this.setProgress}
                />
              }
            >
              science
            </Route>
            <Route
              exact
              path="/sports"
              element={
                <News
                pageSize={this.pageSize}
                country="in"
                category="sports"
                key="sports"
                apikey={this.apikey}
                setProgress={this.setProgress}
                />
              }
            >
              sports
            </Route>
            <Route
              exact
              path="/technology"
              element={
                <News
                pageSize={this.pageSize}
                country="in"
                category="technology"
                key="technology"
                apikey={this.apikey}
                setProgress={this.setProgress}
                />
              }
            >
              technology
            </Route>
          </Routes>
        </Router>
      </>
    );
  }
}
