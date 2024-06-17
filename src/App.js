import "./App.css";
import React, { useState } from "react";
import News from "./components/News";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  // apikey = process.env.NEWS_API_KEY
  const apikeys = ["be52d7e832764e7a83f85bf28ff234e5", "77777cd4c41b4bb3ac51b72bb684dca2"];
  const randomIndex = Math.floor(Math.random() * apikeys.length);
  const apikey = apikeys[randomIndex];
  let pageSize = 6;

  const [progress, setProgress] = useState(0);
  return (
    <>
      <Router>
        <Navbar />
        <LoadingBar color="#f11946" progress={progress} height={3} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                pageSize={pageSize}
                country="in"
                category="general"
                key="general"
                apikey={apikey}
                setProgress={setProgress}
              />
            }>
            general
          </Route>
          <Route
            exact
            path="/business"
            element={
              <News
                pageSize={pageSize}
                country="in"
                category="business"
                key="business"
                apikey={apikey}
                setProgress={setProgress}
              />
            }>
            business
          </Route>
          <Route
            exact
            path="/entertainment"
            element={
              <News
                pageSize={pageSize}
                country="in"
                category="entertainment"
                key="entertainment"
                apikey={apikey}
                setProgress={setProgress}
              />
            }>
            entertainment
          </Route>
          <Route
            exact
            path="/health"
            element={
              <News
                pageSize={pageSize}
                country="in"
                category="health"
                key="health"
                apikey={apikey}
                setProgress={setProgress}
              />
            }>
            health
          </Route>
          <Route
            exact
            path="/science"
            element={
              <News
                pageSize={pageSize}
                country="in"
                category="science"
                key="science"
                apikey={apikey}
                setProgress={setProgress}
              />
            }>
            science
          </Route>
          <Route
            exact
            path="/sports"
            element={
              <News
                pageSize={pageSize}
                country="in"
                category="sports"
                key="sports"
                apikey={apikey}
                setProgress={setProgress}
              />
            }>
            sports
          </Route>
          <Route
            exact
            path="/technology"
            element={
              <News
                pageSize={pageSize}
                country="in"
                category="technology"
                key="technology"
                apikey={apikey}
                setProgress={setProgress}
              />
            }>
            technology
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
