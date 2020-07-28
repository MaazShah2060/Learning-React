import React, { useState } from "react";

function List(props) {
  const [isclicked, setisclicked] = useState(false);
  function handleclick(){
    setisclicked(preValue => {
      return !preValue;
    });
  }
  return <li onclick={handleclick} style={{textDecoration: isclicked ? "line-through" : "none"}}>{props.li}</li>;
}
export default List;