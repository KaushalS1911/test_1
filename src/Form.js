import React, { useState } from "react";

function Form() {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [contact, setContact] = useState("");

const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    password: ""
})

  function handleSubmit() {
    console.log(user);
  }

  function handleChange(e){
    const {name, value} = e.target
    setUser({...user, [name]: value })
  }

  console.log(user);

  return (
    <div className="container p-5 col-md-4">
      <h2 className="text-center my-4">Register</h2>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          First Name
        </label>
        <input
          type="text"
          name="firstName"
          value={user.firstName}
          onChange={(event) => handleChange(event)}
          className="form-control"
          id="exampleFormControlInput1"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Last Name
        </label>
        <input
          type="text"
          name="lastName"
          value={user.lastName}
          onChange={(e) => handleChange(e)}
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
          name="email"
          value={user.email}
          onChange={(e) => handleChange(e)}
          className="form-control"
          id="exampleFormControlInput1"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Contact
        </label>
        <input
          type="text"
          name="contact"
          value={user.contact}
          onChange={(e) => handleChange(e)}
          className="form-control"
          id="exampleFormControlInput1"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Password
        </label>
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={(e) => handleChange(e)}
          className="form-control"
          id="exampleFormControlInput1"
        />
      </div>
      <button className="btn btn-primary" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}

export default Form;
