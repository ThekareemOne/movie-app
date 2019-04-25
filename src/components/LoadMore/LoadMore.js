import React from "react";
import "./LoadMore.css";

export default function LoadMore(props) {
  return (
    <div className="loadmorebtn btn btn-success " onClick={props.onClick}>
      <p>{props.text}</p>
    </div>
  );
}
