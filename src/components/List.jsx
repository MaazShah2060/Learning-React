import React, { useState } from "react";

function List(props) {
  
  return <li onClick={()=>props.oncheck(props.id)} >{props.li}</li>;
}
export default List;
