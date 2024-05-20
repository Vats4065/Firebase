import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

function Header() {
  const [active, setActive] = useState("Home");
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setActive("Home");
    } else if (location.pathname === "/about") {
      setActive("About");
    } else if (location.pathname === "/add") {
      setActive("AddContact");
    }
  }, [location]);

  return (
    <>
      <div className="container-fluid bg-light py-1 ">
        <div className="header d-flex justify-content-between align-items-center">
          <NavLink
            className="text-dark fs-bolder text-decoration-none fw-bold fs-3 cursor-pointers"
            to="/"
          >
            Contact-App
          </NavLink>

          <ul className="navbar align-items-center mt-2 fw-normal fs-5">
            <li>
              <NavLink
                className={` text-decoration-none text-dark me-3 ${
                  active === "Home" ? "active" : ""
                }`}
                to="/"
                onClick={() => setActive("Home")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={`text-decoration-none text-dark me-3 ${
                  active === "About" ? "active" : ""
                }`}
                to="/about"
                onClick={() => setActive("About")}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                className={`text-decoration-none text-dark ${
                  active === "AddContact" ? "active" : ""
                }`}
                to="add"
                onClick={() => setActive("AddContact")}
              >
                AddContact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
