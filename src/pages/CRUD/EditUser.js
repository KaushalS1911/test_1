import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

function EditUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const {user} = useSelector((state) => state.user)

  const {id} = useParams();


    useEffect(() => {
      if(user){
        setName(user.name)
        setEmail(user.email)
      }
      // axios
      //   .get(`https://66fa26ccafc569e13a9a8ed6.mockapi.io/users/${id}`)
      //   .then((res) => {
      //     console.log(res.data);
      //     setName(res.data.name)
      //     setEmail(res.data.email)
      //   })
      //   .catch((err) => console.log(err));
    }, []);

  const navigate = useNavigate();

  function handleSumbit() {
    console.log(name, email);

    axios
      .put(`https://66fa26ccafc569e13a9a8ed6.mockapi.io/users/${id}`, {
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
      <h2 className="text-center my-5">Edit User</h2>
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
        Save
      </button>
    </div>
  );
}

export default EditUser;
