import React, { useEffect } from "react";
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
      <div className="title">
        <img src="../../images/logo.svg" alt="" />
        <h1>Coinbets</h1>
      </div>
      <ul>
        {listOfElements.map((element, index) => {
          return (
            <li key={index} onClick={toggleTab}>
              <img src={`../../images/${element.toLowerCase()}.svg`} alt="" />
              <p>{element}</p>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
