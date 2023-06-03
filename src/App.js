import "./App.css";
import React, { Component } from "react";
import News from "./components/News";
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
        <>
        
          <Router>
      <Navbar/>
      <Routes>
      <Route exact path="/" element = {<News pageSize={6} country="in" category="general" key="general"/>}>general</Route>
      <Route exact path="/business" element = {<News pageSize={6} country="in" category="business" key="business"/>}>business</Route>
      <Route exact path="/entertainment" element = {<News pageSize={6} country="in" category="entertainment" key="entertainment"/>}>entertainment</Route>
      <Route exact path="/health" element = {<News pageSize={6} country="in" category="health" key="health"/>}>health</Route>
      <Route exact path="/science" element = {<News pageSize={6} country="in" category="science" key="science"/>}>science</Route>
      <Route exact path="/sports" element = {<News pageSize={6} country="in" category="sports" key="sports"/>}>sports</Route>
      <Route exact path="/technology" element = {<News pageSize={6} country="in" category="technology" key="technology"/>}>technology</Route>
      </Routes>
      </Router>
      
      </>
    );
  }
}
