import React, { useState } from "react";
import "./signup.css";
import { FcGoogle } from "react-icons/fc";
import { FaMeta } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase";
import { toast } from "react-toastify";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const handleGoogleSignup = () => {
    signInWithPopup(auth, provider).then((data) => {
      const user = data.user.accessToken;
      console.log(user);
      localStorage.setItem("ecom-signup", user);
    });
    navigate("/login");
  };

  const handleSignup = (e) => {
    e.preventDefault();
    console.log(username, email, password, cpassword);
    if (password === cpassword) {
      toast.success("password match");
    } else {
      toast.warn("password not match");
    }
  };

  return (
    <div className="signup w-50 mx-auto my-5 bg-light px-5 rounded">
      <form className="py-5">
        <div data-mdb-input-init className="form-outline mb-4">
          <input
            type="email"
            id="form2Example1"
            className="form-control"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label className="form-label" htmlFor="form2Example1">
            Username
          </label>
        </div>
        <div data-mdb-input-init className="form-outline mb-4">
          <input
            type="email"
            id="form2Example2"
            className="form-control"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="form-label" htmlFor="form2Example1">
            Email address
          </label>
        </div>

        <div data-mdb-input-init className="form-outline mb-4">
          <input
            type="password"
            id="form2Example3"
            className="form-control"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label className="form-label" htmlFor="form2Example2">
            Password
          </label>
        </div>

        <div data-mdb-input-init className="form-outline mb-4">
          <input
            type="text"
            id="form2Example4"
            className="form-control"
            name="cpassword"
            value={cpassword}
            onChange={(e) => setCpassword(e.target.value)}
          />
          <label className="form-label" htmlFor="form2Example2">
            ConfirmPassword
          </label>
        </div>

        <button
          type="button"
          className="btn btn-primary btn-block mb-4 mx-auto "
          onClick={handleSignup}
        >
          Signup
        </button>

        <div className="text-center">
          <p>
            Already have an account ? <Link to="/login">Login</Link>
          </p>
          <p>or sign up with:</p>
          <button
            type="button"
            data-mdb-button-init
            data-mdb-ripple-init
            className="btn btn-link btn-floating mx-1 fs-3"
          >
            <FaMeta className="icon_f" />
          </button>

          <button
            type="button"
            data-mdb-button-init
            data-mdb-ripple-init
            className="btn btn-link btn-floating mx-1 fs-4"
          >
            <FcGoogle className="icon_g" onClick={handleGoogleSignup} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
