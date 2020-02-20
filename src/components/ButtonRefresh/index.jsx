import React from "react";
import "./styles.css";

export default function ButtonRefresh(props) {
  return (
    <div className="button">
      <button onClick={props.handler}>Refresh</button>
    </div>
  );
}
