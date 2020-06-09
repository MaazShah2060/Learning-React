import React from "react";
import ReactDOM from "react-dom";

const fname = "Maaz";
const lname = "Shah";

var d = new Date();
var date = d.getFullYear();

ReactDOM.render(
  <div>
    <h2 className="head" contentEditable="true" spellCheck="false">
      Created by {fname} {lname}
    </h2>
    <p>copyrights {date}</p>
  </div>,
  document.getElementById("root")
);
