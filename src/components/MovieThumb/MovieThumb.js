import React from "react";
import { Link } from "react-router-dom";
import "./MovieThumb.css";

export default function MovieThumb(props) {
  return (
    <div className="moviethumb clickable">
      <Link
        to={{ pathname: `/${props.movieId}`, movieName: `${props.movieName}` }}
      >
        <img src={props.image} alt={props.movieName} />
      </Link>
    </div>
  );
}
