import React from "react";
import "./FourColGrid.css";

export default function FourColGrid(props) {
  const renderElements = () => {
    const gridElements = props.movies.map((element, index) => {
      return (
        <div key={index} className="grid-element">
          {element}{" "}
        </div>
      );
    });
    return gridElements;
  };

  return (
    <div className="grid">
      <h1>Popular Movies</h1>
      <div className="grid-content">{renderElements()}</div>
    </div>
  );
}
