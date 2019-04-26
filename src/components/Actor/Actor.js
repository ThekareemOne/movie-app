import React from "react";
import "./Actor.css";

export default function Actor(props) {
  return (
    <div className="actor">
      <img src={props.image} />
      <span className="actor-name">{props.name}</span>
      <span className="actor-character">{props.character}</span>
    </div>
  );
}
