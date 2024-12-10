import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "./UserSlice";

function UserList() {
  const [users, setUsers] = useState([]);

  const navigate = useNavigate();
  const dispatch = useDispatch()

  useEffect(() => {
    fetchAllUsers();
  }, []);

  function fetchAllUsers() {
    axios
      .get("https://66fa26ccafc569e13a9a8ed6.mockapi.io/users")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => console.log(err));
  }

  function handleDelete(id) {
    axios
      .delete(`https://66fa26ccafc569e13a9a8ed6.mockapi.io/users/${id}`)
      .then((res) => {
        fetchAllUsers();
        // alert("Deleted successfully");
      })
      .catch((err) => console.log(err));
  }

  function handleEdit(user){
    dispatch(setUser(user))
    navigate(`/edit-user/${user.id}`)
  }
  return (
    <div className="container p-5">
      <div className="d-flex justify-content-between align-items-center">
        <h2 className="mb-5">Users</h2>
        <button
          className="btn btn-primary"
          onClick={() => navigate("/add-user")}
        >
          Add User
        </button>
      </div>
      <table className="w-100">
        <tr>
          <th>Sr No</th>
          <th>Name</th>
          <th>Email</th>
          <th>Created At</th>
          <th>Action</th>
        </tr>
        {users.map((item, index) => {
          return (
            <tr>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.createdAt}</td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={() => handleEdit(item)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger mx-2"
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default UserList;
