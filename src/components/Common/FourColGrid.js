import React from "react";
import "./FourColGrid.css";

export default function FourColGrid(props) {
  const renderMovies = () => {
    const gridElements = props.movies.map((element, index) => {
      return (
        <div key={index} className="grid-element img-thumbnail rounded">
          {element}{" "}
        </div>
      );
    });
    return gridElements;
  };

  return (
    <div className="grid">
      <h1 className="text-center p-4 mt-2">{props.message}</h1>
      <div className="grid-content">{renderMovies()}</div> :{" "}
    </div>
  );
}
