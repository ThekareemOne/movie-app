import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <nav class="navbar navbar-expand-md navbar-dark header">
      <div class="container">
        <div class="navbar-header">
          <Link class="navbar-brand" to="/">
            MovieApp
          </Link>
        </div>
        <div>
          <ul class="nav navbar-nav">
            <li class="nav-item">
              <Link class="nav-link" to="/">
                RANDOM
              </Link>
            </li>
            <li class="nav-item">
              <a class="nav-link" to="/contact">
                CONTACT
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
