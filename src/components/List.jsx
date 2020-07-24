import React from "react";

function List(props){
  return <div>
  <ul>
    {props.item.map(todoItem => (
      <li>{todoItem}</li>
    ))}
  </ul>
</div>
}

export default List;