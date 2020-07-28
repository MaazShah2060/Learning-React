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
  function deleteItem(id){
    setItems(prevItems => {
      return prevItems.filter(
        (item,index) => {
          return index !== id;
        }
      );
    })
  }
  return (
    <div className="container">
      <Heading />
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <Button add = {addItem}/>
      </div>
      <div>
        <ul>
        {items.map((todoItem,index) => (
            <List key={index} id = {index} li={todoItem} oncheck={deleteItem} />
          ))}
        </ul>
      </div>
    </div>
  );
}
export default App;
