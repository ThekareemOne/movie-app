import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="header-content">
        <Link to="/">
          <img
            className="logo"
            src="images\reactMovie_logo.png"
            alt="React Logo"
          />
        </Link>
        <img className="tmdb-logo" src="images\tmdb_logo.png" alt="TMDB Logo" />
      </div>
    </div>
  );
}
