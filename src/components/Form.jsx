import React from "react";
import {userIsRegistered} from "./App";

function Form() {
  return (
    <form className="form">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      {!userIsRegistered && <input type="password" placeholder="Confirm Password" />}
      {userIsRegistered ? <button type="submit">Login</button> : <button type="submit">Register</button>}
    </form>
  );
}

export default Form;
