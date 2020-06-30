import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }
  function decrease() {
    setCount(count - 1);
  }
  function reset() {
    setCount(count - count);
  }
  return (
    <div className="container">
      <h1>{count}</h1>
      <button className="remove" onClick={decrease}>
        -
      </button>
      <button className="add" onClick={increase}>
        +
      </button>
      <button className="delete" onClick={reset}>
        x
      </button>
    </div>
  );
}

export default App;
