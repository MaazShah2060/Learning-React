import React from "react";
var date = new Date();
var col = {
  color: ''
};
var time = date.getHours();
if (time>=5 && time<=11){
 var welcome="Good Morning";
 col.color='red';
}
if(time>11 && time <=18){
 welcome="Good Afternoon";
 col.color='purple';
}
if(time>18&&time<=24){
 welcome = "Good Evening";
 col.color='blue';
}
if(time>=0&&time<5){
  welcome = "Good Night";
  col.color='cyan';
}

function Heading(){
 return   <h1 style= {col}>
 {welcome}
  </h1>
}

export default Heading;