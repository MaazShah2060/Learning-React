import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import contacts from "./contacts";
function createContact(contacts){
  return <App
      name={contacts.name}
      img={contacts.imgURL}
      tel={contacts.phone}
      email={contacts.email}
    />
}
ReactDOM.render(
  <div>
    <h1 className="heading">My Contacts</h1>
    {contacts.map(createContact)}
  </div>,
  document.getElementById("root")
);

//1. Apply CSS styles to App.jsx component
//to match the appearance on the completed app:
//https://c6fkx.csb.app/
//2. Extract the contact card as a reusable Card component.
//3. Use props to render the default Beyonce contact card
//so the Card component can be reused for other contacts.
//4. Import the contacts.js file to create card components.
