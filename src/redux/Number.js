import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./NumberSlice";

function Number() {
  const {number} = useSelector((state) => state.number)

  const dispatch = useDispatch();

  return (
    <div className="container p-5 col-md-6">
      <h2>Number: {number}</h2>
      <button className="btn btn-success" onClick={() => dispatch(increment())}>+</button>
      <button className="btn btn-danger mx-3" onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}

export default Number;
