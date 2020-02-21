import React from "react";
import "./styles.css";

export default function Stock(props) {
  return (
    <div className={`stock ${props.stock}`}>
      <h6>{props.name}</h6>
      <p>${props.price}</p>
    </div>
  );
}
