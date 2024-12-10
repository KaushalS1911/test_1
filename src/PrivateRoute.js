import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function PrivateRoute() {
  const auth = sessionStorage.getItem("token");

  return <div>{auth ? <Outlet /> : <Navigate to={"/login"} />}</div>;
}

export default PrivateRoute;
