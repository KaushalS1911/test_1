import React, { useState } from "react";

function Number() {
  // let number = 10
  // number  = 20

  const [number, setNumber] = useState(0);
  const [name, setName]= useState("")

  const increment = () => {
    if (number < 10) {
      setNumber(number + 1);
    }
  };
  const decrement = () => {
    if (number > 0) {
      setNumber(number - 1);
    }
  };

  return (
    <div className="container p-5 col-md-4">
      <h2>Number : {number}</h2>
      <h2>Name: {name}</h2>
      <button className="btn btn-success" disabled={number === 10} onClick={() => setName("Admin")}>
        +
      </button>
      <button className="btn btn-danger mx-3"  onClick={() => setName("")}>
        -
      </button>
    </div>
  );
}

export default Number;
