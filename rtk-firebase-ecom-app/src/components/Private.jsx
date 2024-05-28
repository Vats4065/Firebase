import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const PrivateComponent = () => {
  const user = localStorage.getItem("eshop-login");
  const googleuser = localStorage.getItem("eshop-google-signup");
  return user || googleuser ? <Outlet /> : <Navigate to="/login" />;
};

export const PrivateAdmin = ({ isAdmin }) => {
  return isAdmin ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateComponent;
