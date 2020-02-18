import React, { useState } from "react";
import "./styles.css";

export default function() {
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
        <li className="selected" onClick={toggleTab}>
          <img src="../../images/dashboard.svg" alt="" />
          <p>Dashboard</p>
        </li>
        <li onClick={toggleTab}>
          <img src="../../images/refresh.svg" alt="" />
          <p>Exchange</p>
        </li>
        <li onClick={toggleTab}>
          <img src="../../images/transaction.svg" alt="" />
          <p>Transactions</p>
        </li>
        <li onClick={toggleTab}>
          <img src="../../images/settings.svg" alt="" />
          <p>Settings</p>
        </li>
      </ul>
    </nav>
  );
}
