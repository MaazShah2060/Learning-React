import React, { useState } from "react";
import Heading from "./Heading";
import List from "./List";
import Button from "./Button";
function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }
  function addItem() {
    setItems(prevItems => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }
  return (
    <div className="container">
      <Heading />
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <Button add = {addItem}/>
      </div>
      <List item={items}/>
    </div>
  );
}
export default App;
