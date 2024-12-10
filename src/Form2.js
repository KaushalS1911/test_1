import React, { useState } from "react";

function Form2() {
  const [hobbies, setHobbies] = useState([]);

  function handleSubmit() {
    console.log(hobbies);
  }

  function handleChange(e) {
    const { checked, value } = e.target;
    // console.log(checked, value);
    if (checked === false) {
      const filteredData = hobbies.filter((item) => item !== value);
      setHobbies(filteredData);
    } else {
      setHobbies([...hobbies, value]);
    }
  }

  return (
    <div className="container p-5 col-md-6">
      <h2>Form</h2>
      <label htmlFor="">Hobbies</label>
      <br></br>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value="Music"
          checked={hobbies.includes("Music")}
          onChange={(e) => handleChange(e)}
          id="flexCheckDefault"
        />
        <label className="form-check-label" htmlFor="flexCheckDefault">
          Music
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value="Travelling"
          checked={hobbies.includes("Travelling")}
          onChange={(e) => handleChange(e)}
          id="flexCheckDefault"
        />
        <label className="form-check-label" htmlFor="flexCheckDefault">
          Travelling
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value="Reading"
          checked={hobbies.includes("Reading")}
          onChange={(e) => handleChange(e)}
          id="flexCheckDefault"
        />
        <label className="form-check-label" htmlFor="flexCheckDefault">
          Reading
        </label>
      </div>
      {/* <input type="checkbox" name="" id="" value="Music" /> Music
      <input type="checkbox" name="" id="" value="Travelling" /> Travelling
      <input type="checkbox" name="" id="" value="Reading" /> Reading */}
      <br />
      <button className="btn btn-primary" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}

export default Form2;
