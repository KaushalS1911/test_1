import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  function handleSumbit() {
    console.log(name, email);

    axios
      .post("https://66fa26ccafc569e13a9a8ed6.mockapi.io/users", {
        name,
        email,
      })
      .then((res) => {
        navigate("/");
        console.log(res);
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <div className="container p-5 col-md-4">
      <h2 className="text-center my-5">Add User</h2>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Name
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-control"
          id="exampleFormControlInput1"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Email
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control"
          id="exampleFormControlInput1"
        />
      </div>
      <button className="btn btn-primary" onClick={handleSumbit}>
        Submit
      </button>
    </div>
  );
}

export default AddUser;
