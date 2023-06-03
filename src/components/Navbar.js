import React from "react";
import { Component } from "react";
import {Link} from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="/">
            NewsMonkey
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="/navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/business">Business</Link></li>
              <li className="nav-item">
                <Link className="nav-link" to="/entertainment">Entertainment</Link></li>
              <li className="nav-item">
                <Link className="nav-link" to="/health">Health</Link></li>
              <li className="nav-item">
                <Link className="nav-link" to="/science">Science</Link></li>
              <li className="nav-item">
                <Link className="nav-link" to="/sports">Sports</Link></li>
              <li className="nav-item">
                <Link className="nav-link" to="/technology">Technology</Link></li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
