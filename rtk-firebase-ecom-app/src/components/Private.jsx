import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const PrivateComponent = () => {
  const user = localStorage.getItem("eshop-login");
  const googleuser = localStorage.getItem("eshop-google-login");
  return user || googleuser ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateComponent;
