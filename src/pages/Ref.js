import React, { useRef } from "react";

function Ref() {
  const inputRef = useRef(null);

  function handleClick() {
    //    const data = document.getElementById('i1').value
    const data = inputRef.current;
    console.log(data);
  }

  return (
    <div className="container p-5 col-md-6" ref={inputRef}>
      <input type="text" value="This is text input" id="i1" />
      <button className="btn btn-primary" onClick={handleClick}>
        Click me
      </button>
    </div>
  );
}

export default Ref;
