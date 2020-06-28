import React from "react";
import Login from "./Login";
import Register from "./Register";

var registered = false;

function App() {
  return (
    <div className="container">{registered ? <Login /> : <Register />}</div>
  );
}

export default App;
