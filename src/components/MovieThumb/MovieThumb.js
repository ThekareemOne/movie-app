import React from "react";
import "./MovieThumb.css";

export default function MovieThumb(props) {
  return (
    <div className="moviethumb clickable">
      <img src={props.image} alt={props.movieName} />
    </div>
  );
}
