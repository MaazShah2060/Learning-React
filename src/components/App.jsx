import React, { useState } from "react";

function App() {
const [fullname,setfullname] = useState({
  fname: "",
  lname: ""
});
  function updatefullname(event){
    const {value, name} = event.target;
    
    setfullname(prevValue => {
      if(name === "fName"){
        return {
          fname: value,
          lname: prevValue.lname
        }
      } else if(name === "lName"){
        return {
          fname: prevValue.fname,
          lname: value
        };
      }
    });
  }
  return (
    <div className="container">
      <h1>Hello {fullname.fname} {fullname.lname}</h1>
      <form>
        <input onChange={updatefullname} 
        name="fName" 
        placeholder="First Name" 
        value={fullname.fname}
        />
        <input 
        onChange={updatefullname} 
        name="lName" placeholder="Last Name" 
        value={fullname.lname}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
