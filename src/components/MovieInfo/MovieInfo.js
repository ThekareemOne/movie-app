import React from "react";
import "./MovieInfo.css";
import { IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE } from "../../config";
import MovieThumb from "../MovieThumb/MovieThumb";
import { Link } from "react-router-dom";

export default function MovieInfo(props) {
  console.log(props.movie);

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
          <h1 className="h1" style={{ fontFamily: "Anton" }}>
            {props.movie.title}
          </h1>
          <p className="lead">{props.movie.overview}</p>
          <h3><a href={`https://www.imdb.com/title/${props.movie.imdb_id}`} target="_blank" style={{color: "#E2B616", cursor: "pointer", textDecoration: "none"}}>IMDB</a> Rating</h3>
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
          <p
            className="mt-3"
            style={{ fontFamily: "Muli" }}
          >
            Year: {props.movie.release_date.substring(0,4)}
          </p>
          {props.directors.length > 1 ? <h3>Directors </h3> : <h3>Director</h3>}
          {props.directors.map((element, index) => {
            return (
              <p key={index} className="director">
                {element.name}{" "}
              </p>
            );
          })}
          <p
            className="mt-5 blockquote movieinfo-tagline"
            style={{ fontFamily: "Muli" }}
          >
            {props.movie.tagline}
          </p>
        </div>
      </div>
    </div>
  );
}
