import React, { useEffect } from "react";
import "./styles.css";

export default function() {
  const listOfVehicles = ["Crypto", "Currency", "Stocks"];

  useEffect(() => {
    document.querySelector("li").classList.add("active");
  });

  function toggleActive(event) {
    document.querySelector(".active").classList.remove("active");
    event.target.classList.add("active");
  }

  return (
    <header>
      <div className="overview">
        <p>Overview Dashboard</p>
        <h1>Trading view</h1>
      </div>
      <ul>
        {listOfVehicles.map((item, index) => {
          return (
            <li key={index} onClick={toggleActive}>
              {item}
            </li>
          );
        })}
      </ul>
    </header>
  );
}
