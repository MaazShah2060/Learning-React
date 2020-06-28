import React from "react";
import Input from "./Input";
function Register() {
  return (
    <form className="form">
      <Input />
      <input type="password" placeholder="Confirm Password" />
      <button type="submit">Register</button>
    </form>
  );
}
export default Register;
