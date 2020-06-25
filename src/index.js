import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import emojipedia from "./emojipedia"

function emoji(emojipedia){
  return <App
  id={emojipedia.id}
  name={emojipedia.name}
  emoji={emojipedia.emoji}
  meaning={emojipedia.meaning}
  />
}
ReactDOM.render( 
<div className="par">
  <h1>
  <span>emojipedia</span>
</h1>
<div className="biggi">
{emojipedia.map(emoji)}
</div>
</div>
, document.getElementById("root"));
