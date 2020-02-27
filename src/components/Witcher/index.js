import React from "react";
import "./style.css";

function Witcher(props) {
  return (
    <img
      onClick={() => props.imageClick(props.id, props.name, props.clicked)}
      className="rounded imageBorder"
      src={props.image}
      alt={props.name}
      key={props.id}
    />
  );
}

export default Witcher;
