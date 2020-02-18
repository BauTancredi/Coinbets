import React, { useEffect } from "react";
import "./styles.css";

export default function Card(props) {
  useEffect(() => {});
  return (
    <div className={`card ${props.card}`}>
      <div className="card--left">
        <h3 className="card-title">{props.crypto}</h3>
        <h3 className="card-price">${props.price}</h3>
        <p>{props.info}</p>
      </div>
      <img src={props.img} alt="currency logo" />
    </div>
  );
}
