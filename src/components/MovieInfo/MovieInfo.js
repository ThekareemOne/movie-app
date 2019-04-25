import React from "react";
import "./MovieInfo.css";
import { IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE } from "../../config";
import MovieThumb from "../MovieThumb/MovieThumb";

export default function MovieInfo(props) {
  return (
    <div
      className="movieinfo"
      style={{
        background: props.movie.backdrop_path
          ? `url('${IMAGE_BASE_URL}${BACKDROP_SIZE}${
              props.movie.backdrop_path
            }')`
          : "#000"
      }}
    >
      <div className="movieinfo-content">
        <div className="movieinfo-thumb">
          <MovieThumb
            image={
              props.movie.poster_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${props.movie.poster_path}`
                : "images\no_image.jpg"
            }
          />
        </div>
        <div className="movieinfo-text">
          <h1>{props.movie.title}</h1>
          <h3>{props.movie.plot}</h3>
          <p>Overview</p>
          <h3>IMDB Rating</h3>
          <div className="rating">
            <meter
              min="0"
              max="10"
              optimum="10"
              low="5"
              high="7"
              value={props.movie.vote_average}
            />
            <p className="score">{props.movie.vote_average}</p>
          </div>
          {props.directors.length > 1 ? <h3>Directors </h3> : <h3>Director</h3>}
          {props.directors.map((element, index) => {
            return (
              <p key={index} className="director">
                {element.name}{" "}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
}
