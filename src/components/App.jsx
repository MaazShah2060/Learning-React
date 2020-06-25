import React from "react";
import Avatar from './Avatar';

function App(props) {
  return (
        <div className="card">
          <div className="top">
          <p>{props.id}</p>
            <h2 className="name">{props.name}</h2>
            <Avatar img={props.img} />
          </div>
          <div className="bottom">
            <p>{props.tel}</p>
            <p className="info">{props.email}</p>
          </div>
        </div>
  );
}

export default App;
