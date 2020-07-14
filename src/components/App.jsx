import React, { useState } from "react";

function App() {
  const [name,setName] = useState("");
  const[_name,_setName] = useState("");
  function callName(event){
    setName(event.target.value);
    }
  function submit(){
    _setName(name);
  }
  return (
    <div className="container">
      <h1>Hello {_name}</h1>
      <input onChange={callName} type="text" placeholder="What's your name?" />
      <button onClick={submit}>Submit</button>
    </div>
  );
}

export default App;
