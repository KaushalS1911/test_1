import React, { createContext } from "react";
import img1 from "../src/logo192.png";
import Comp1 from "../src/pages/Context/Comp1";
import About from "./pages/About";
import Number from "../src/redux/Number";
import Card from "./Card";
import Card2 from "./Card2";
import Form from "./Form";
import Form2 from "./Form2";
import Drinks from "./Drinks";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import UserList from "./pages/CRUD/UserList";
import AddUser from "./pages/CRUD/AddUser";
import EditUser from "./pages/CRUD/EditUser";
import Register from "./pages/Register";
import Login from "./pages/Login";
import PrivateRoute from "./PrivateRoute";
import Reducer from "./pages/Reducer";
import Ref from "./pages/Ref";
import Location from "./pages/Location";
import Drinks2 from "./redux/Drinks2";
import Main from "./pages/hooks/Main";

export const userContext = createContext();

function App() {
  const name = "Deep";
  const email = "deep@gmail.com";

  const isLogin = false;

  const isAdmin = true;

  return (
    <>
      {/* <label htmlFor="fname">First Name</label>
      <input type="text" id="fname" />
      <h2 style={{ color: "red", backgroundColor: "beige" }}>
        This is my App and my name is {name}
      </h2>
      <button>{isLogin ? "Logout" : "Login"}</button>

      {isAdmin && <button className="btn btn-primary">Add Company</button>}

      <img src={img1} alt="" /> */}

      {/* <h1>Cards</h1>
      <About/>
      <Comp1/> */}

      {/* <Card title={"Udaipur, India"} img={'https://a0.muscache.com/im/pictures/miso/Hosting-983628068535189241/original/6fb13419-22cb-4378-bacc-22fa484869e2.jpeg?im_w=720'}/>
      <Card title={"Mulshi, India"} img={'https://a0.muscache.com/im/pictures/miso/Hosting-1028890791821666023/original/4d9b20b7-ebbf-490f-a31f-bba8b5c9e80c.jpeg?im_w=720'}/> */}
      {/* <Card2/> */}

      {/* <Drinks /> */}

      <Navbar />
      <Main/>
      {/* <Drinks2/>
      <Drinks/> */}

      {/* <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/register" element={<Register />} />
        <Route path="/location" element={<Location />} />
        <Route path="/login" element={<Login />} />

        <Route element={<PrivateRoute />}>
          <Route path="/add-user" element={<AddUser />} />
          <Route path="/edit-user/:id" element={<EditUser />} />
        </Route>
      </Routes> */}
      {/* <userContext.Provider value={{name, email}}>
        <Comp1 />
      </userContext.Provider> */}

      {/* <Ref/> */}
    </>
  );
}

export default App;
