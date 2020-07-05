import React, { useState } from "react";

function App() {
  const [heading,setheading] = useState('Hello!!');
  const [isMouseOver,setMouseOver] = useState(false);
  function handleClick(){
    setheading("Submitted");
  }
  function setcolor(){
    setMouseOver(true);
  }
  function resetcolor(){
    setMouseOver(false);
  }
  return (
    <div className="container">
      <h1>{heading}</h1>
      <input type="text" placeholder="What's your name?" />
      <button style = {{background : isMouseOver ? 'black' : 'white'}}
      onClick={handleClick} onMouseOver={setcolor} onMouseOut={resetcolor} >Submit</button>
    </div>
  );
}

export default App;
