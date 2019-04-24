import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="header-content">
        <img
          className="logo"
          src="images\reactMovie_logo.png"
          alt="React Logo"
        />
        <img className="tmdb-logo" src="images\tmdb_logo.png" alt="TMDB Logo" />
      </div>
    </div>
  );
}
