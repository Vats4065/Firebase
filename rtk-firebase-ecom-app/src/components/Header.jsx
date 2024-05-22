import React, { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";
import { toast } from "react-toastify";
import { IoPersonCircle } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { REMOVE_ACTIVE_USER, SET_ACTIVE_USER } from "../redux/slice/authSlice";
import  { ShowOnLogin, ShowOnLogout } from "./Hidemenu";

const logo = (
  <div className={styles.logo}>
    <NavLink to="/" className="text-decoration-none text-white fw-bolder ">
      <h2>
        e<span className="text-danger">Shop</span>.
      </h2>
    </NavLink>
  </div>
);

const menu = (
  <div style={{ marginLeft: "220px" }}>
    <NavLink
      to="/"
      className={({ isActive }) => (isActive ? `${styles.active} ` : "")}
    >
      Home
    </NavLink>
    <NavLink
      to="/contact"
      style={{ marginLeft: "20px" }}
      className={({ isActive }) => (isActive ? `${styles.active}` : "")}
    >
      Contact Us
    </NavLink>
  </div>
);

const cart = (
  <>
    <span className="d-flex align-items-center ms-3 ">
      <NavLink to="/cart " className="text-decoration-none text-danger">
        Cart
        <FaShoppingCart size={21} />
        <span>0</span>
      </NavLink>
    </span>
  </>
);

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // console.log(user);
        // const uid = user.uid;
        // console.log(user.displayName);
        if (user.displayName === null) {
          const ul = user.email.substring(0, user.email.indexOf("@"));
          console.log(ul);
          const uname = ul.charAt(0).toUpperCase() + ul.slice(1);
          console.log(uname);
          setUsername(uname);
        } else {
          setUsername(user.displayName);
        }
        dispatch(
          SET_ACTIVE_USER({
            email: user.email,
            userName: user.displayName ? user.displayName : username,
            userID: user.uid,
          })
        );
      } else {
        setUsername("");
        dispatch(REMOVE_ACTIVE_USER());
      }
    });
  }, [dispatch, username]);

  const logoutUser = () => {
    if (window.confirm("Are You Sure To Logout")) {
      signOut(auth)
        .then(() => {
          localStorage.removeItem("eshop-login");
          localStorage.removeItem("eshop-google-login");
          toast.success("logout successfully");
          navigate("/login");
        })
        .catch((err) => {
          toast.error("something went wrong");
        });
    }
  };
  return (
    <header className="bg-dark header d-flex align-items-center justify-content-between px-2 ">
      <div className={`${styles.header} navbar bg-dark`}>{logo}</div>

      <ShowOnLogin>
        {" "}
        <div className={styles.menu}>{menu}</div>
      </ShowOnLogin>

      <div
        className={`${styles.links} ${styles.navRight} d-flex align-items-center`}
      >
        <ShowOnLogout>
          <NavLink
            to="/login"
            style={{ marginLeft: "10px" }}
            className={({ isActive }) => (isActive ? `${styles.active}` : "")}
          >
            Login
          </NavLink>
          <NavLink
            to="/signup"
            style={{ marginLeft: "10px" }}
            className={({ isActive }) => (isActive ? `${styles.active}` : "")}
          >
            Register
          </NavLink>
        </ShowOnLogout>

        <ShowOnLogin>
          <Link className="username text-white opacity-75 d-flex align-items-center" to="/user" >
            {" "}
            <IoPersonCircle className="fs-3 me-1"></IoPersonCircle> {username}
          </Link>
          <NavLink
            to="/orderHistory"
            style={{ marginLeft: "10px" }}
            className={({ isActive }) => (isActive ? `${styles.active}` : "")}
          >
            My orders
          </NavLink>
          {cart}
          <NavLink to="/" style={{ marginLeft: "10px" }} onClick={logoutUser}>
            Logout
          </NavLink>
        </ShowOnLogin>
      </div>
    </header>
  );
};

export default Header;
