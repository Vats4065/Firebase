import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const PrivateComponent = () => {
  const user = localStorage.getItem("ecom-fire-login");
  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateComponent;
