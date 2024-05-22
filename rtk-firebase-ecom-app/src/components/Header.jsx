import React from "react";
import styles from "./Header.module.scss";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const logo = (
  <div className={styles.logo}>
    <NavLink to="/" className="text-decoration-none text-white fw-bolder">
      <h2>
        e<span className="text-danger">Shop</span>.
      </h2>
    </NavLink>
  </div>
);

const menu = (
  <>
    <NavLink
      to="/"
      className={({ isActive }) => (isActive ? `${styles.active} ` : "")}
    >
      Home
    </NavLink>
    <NavLink
      to="/contact"
      style={{ marginLeft: "10px" }}
      className={({ isActive }) => (isActive ? `${styles.active}` : "")}
    >
      Contact Us
    </NavLink>
  </>
);

const cart = (
  <>
    <span className="d-flex align-items-center ms-3 ">
      <NavLink to="/cart " className="text-decoration-none text-danger  ms-2">
        Cart
        <FaShoppingCart size={21} />
        <span>0</span>
      </NavLink>
    </span>
  </>
);

const Header = () => {
  return (
    <header className="bg-dark header d-flex align-items-center justify-content-between px-2">
      <div className={`${styles.header} navbar bg-dark`}>{logo}</div>
      <div className={styles.menu}>{menu}</div>
      <div
        className={`${styles.links} ${styles.navRight} d-flex align-items-center`}
      >
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
        <NavLink
          to="/orderHistory"
          style={{ marginLeft: "10px" }}
          className={({ isActive }) => (isActive ? `${styles.active}` : "")}
        >
          My orders
        </NavLink>
        {cart}
      </div>
    </header>
  );
};

export default Header;
