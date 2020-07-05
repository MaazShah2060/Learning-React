// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice"
const [honda,tesla] = cars;

const {model: hondamodel,coloursByPopularity: hondacolour, speedStats:hondaspeed} = honda;
const {model: teslamodel,coloursByPopularity: teslacolour,speedStats: teslaspeed} = tesla;
const [hondaTopColour,hondadowncolor] = hondacolour;
const [teslaTopColour,tesladowncolour] = teslacolour;
const {topSpeed: hondaTopSpeed} = hondaspeed;
const {topSpeed: teslaTopSpeed} = teslaspeed;


ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
