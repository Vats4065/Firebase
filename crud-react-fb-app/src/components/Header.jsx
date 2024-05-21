import { getAuth, signOut } from "firebase/auth";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";

function Header() {
  const auth = getAuth();
  const navigate = useNavigate();
  const [active, setActive] = useState("Home");
  const location = useLocation();
  const getItem = localStorage.getItem("c-login");
  console.log(getItem);

  useEffect(() => {
    if (location.pathname === "/") {
      setActive("Home");
    } else if (location.pathname === "/about") {
      setActive("About");
    } else if (location.pathname === "/add") {
      setActive("AddContact");
    } else if (location.pathname === "/signup") {
      setActive("Signup");
    } else if (location.pathname === "/login") {
      setActive("Login");
    }
  }, [location]);

  const logout = async () => {
    if (window.confirm("are you sure for logout")) {
      await signOut(auth);
      localStorage.removeItem("c-login");
      navigate("/login");
    }
  };

  return (
    <>
      <div className="container-fluid bg-light py-1 ">
        <div className="header d-flex justify-content-between align-items-center">
          <a className="text-dark fs-bolder text-decoration-none fw-bold fs-3 cursor-pointers">
            Contact-App
          </a>

          <ul className="navbar align-items-center mt-2 fw-normal fs-5">
            {getItem === null ? (
              <>
                <li>
                  <NavLink
                    className={` text-decoration-none text-dark me-3 ${
                      active === "Signup" ? "active" : ""
                    }`}
                    to="/signup"
                    onClick={() => setActive("Signup")}
                  >
                    Signup
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={` text-decoration-none text-dark me-3 ${
                      active === "Login" ? "active" : ""
                    }`}
                    to="/login"
                    onClick={() => setActive("Login")}
                  >
                    Login
                  </NavLink>
                </li>
              </>
            ) : (
              <>
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
                    className={`text-decoration-none text-dark me-3${
                      active === "AddContact" ? "active" : ""
                    }`}
                    to="add"
                    onClick={() => setActive("AddContact")}
                  >
                    AddContact
                  </NavLink>
                </li>
                <li>
                  <Link
                    className="text-decoration-none text-dark "
                    onClick={logout}
                  >
                    logout
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
