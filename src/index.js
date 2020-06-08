import React from "react";
import ReactDOM from "react-dom";

const fname = "Maaz";
const lname = "Shah";
var rand = Math.floor(Math.random() * 11);

ReactDOM.render(
  <div>
    <h1>
      {fname} {lname}
    </h1>
    <p>This is a random number {rand}</p>
  </div>,
  document.getElementById("root")
);
