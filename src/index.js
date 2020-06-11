import React from "react";
import ReactDOM from "react-dom";
var date = new Date();
var time = date.getHours();
if (time>=5 && time<=11){
 var welcome="Good Morning";
 var col = {color: 'red'};
}
if(time>11 && time <=18){
 welcome="Good Afternoon";
 col = {color: 'purple'};
}
if(time>18&&time<=24){
 welcome = "Good Evening";
 col = {color: 'blue'}
}
if(time>=0&&time<5){
  welcome = "Good Night";
  col = {color: 'cyan'};
}

ReactDOM.render(
  <div>
    <h1 style= {col}>
   {welcome}
    </h1>
  </div>,
  document.getElementById("root")
);
