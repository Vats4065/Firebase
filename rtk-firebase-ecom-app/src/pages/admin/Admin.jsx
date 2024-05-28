import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Sidebar from "../../components/Admin/Sidebar";

import { useEffect } from "react";
import Dashboard from "./Dashboard";

const Admin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const pathName = location.pathName;

  useEffect(() => {
    navigate("/admin/dashboard");
  }, [pathName]);

  return (
    <>
      <div className="d-flex">
        <Sidebar />
        {pathName === "/admin" ? <Dashboard /> : <Outlet />}
      </div>
    </>
  );
};

export default Admin;
