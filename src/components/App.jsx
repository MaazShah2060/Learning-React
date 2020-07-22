import React, { useState } from "react";

function App() {
  const [item,updateitem] = useState("");
  const [allitem,setallitem] = useState([]);
  function handleChange(event){
    const newitem = event.target.value;
    updateitem(newitem);
  }
  function insertItem (){
    setallitem(prevalue => {
      return [...prevalue,item];
    });
    updateitem("");
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={item} />
        <button>
          <span onClick={insertItem}>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {allitem.map(final => {
            return <li>{final}</li>
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
