import "./App.css";
import React, { useState } from "react";
import News from "./components/News";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  // apikey = process.env.NEWS_API_KEY
  const apikeys = ["ed6c8110f636f94915b258e81e650938", "c5fd6b304a75fd8f2743aaea7bb20160"];
  const randomIndex = Math.floor(Math.random() * apikeys.length);
  const apikey = apikeys[randomIndex];

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
