import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import "./styles.css";

export default function Sidebar() {
  const listOfElements = ["Dashboard", "Exchange", "Transactions", "Settings"];

  useEffect(() => {
    document.querySelector("nav ul li").classList.add("selected");
  });

  function toggleTab(event) {
    document.querySelector(".selected").classList.remove("selected");
    const target = event.target;
    const parentElement = target.parentElement;
    const parentName = target.parentNode.nodeName;

    if (parentName === "UL") {
      target.classList.add("selected");
    } else if (parentName === "LI") {
      parentElement.classList.add("selected");
    }
  }
  return (
    <nav>
      <Link to="/" className="link">
        <div className="title">
          <img src="../../images/logo.svg" alt="" />
          <h1>Coinbets</h1>
        </div>
      </Link>
      <ul>
        {listOfElements.map((element, index) => {
          return (
            <li key={index} onClick={toggleTab}>
              <img
                src={`${
                  process.env.PUBLIC_URL
                }/images/${element.toLowerCase()}.svg`}
                alt=""
              />
              <p>{element}</p>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
