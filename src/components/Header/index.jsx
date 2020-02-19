import React from "react";
import { NavLink } from "react-router-dom";

import "./styles.css";

export default function Header() {
  const listOfVehicles = ["Crypto", "Currency", "Stocks"];

  // useEffect(() => {
  //   console.log();
  //   document.querySelector("header ul li").classList.add("active");
  // });

  // function toggleActive(event) {
  //   document.querySelector(".active").classList.remove("active");
  //   event.target.classList.add("active");
  // }

  return (
    <header>
      <div className="overview">
        <p>Overview Dashboard</p>
        <h1>Trading view</h1>
      </div>
      <ul>
        {listOfVehicles.map((item, index) => {
          return (
            <NavLink
              to={`/${item.toLowerCase()}`}
              className="link"
              activeClassName="active"
              style={{ color: "white" }}
            >
              <li key={index}>{item}</li>
            </NavLink>
          );
        })}
      </ul>
    </header>
  );
}
