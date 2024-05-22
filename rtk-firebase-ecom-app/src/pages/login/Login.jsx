import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaMeta } from "react-icons/fa6";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../firebase";
import { toast } from "react-toastify";
import Loader from "../../components/Loader";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    console.log(email, password);
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        console.log(user);
        localStorage.setItem("eshop-login", user.user.accessToken);
        console.log(user);
        toast.success("welcome to eShop.");
        navigate("/");
        setIsLoading(false);
      })
      .catch((error) => {
        toast.error(error.message);
        setIsLoading(false);
      });
  };

  const provider = new GoogleAuthProvider();
  const handlegoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("Welcome to eShop.");
        localStorage.setItem("eshop-google-login", user);
        navigate("/");
      })
      .catch((error) => {});
  };

  return (
    <>
      {isLoading && <Loader />}
      <div className="login w-50 mx-auto my-5 bg-light px-5 rounded">
        <form className="py-5">
          <div data-mdb-input-init className="form-outline mb-4">
            <input
              type="email"
              id="form2Example1"
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
              id="form2Example2"
              className="form-control"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label className="form-label" htmlFor="form2Example2">
              Password
            </label>
          </div>

          <button
            type="button"
            className="btn btn-primary btn-block mb-4 mx-auto "
            onClick={handleLogin}
          >
            Login
          </button>

          <div className="text-center">
            <p>
              Not a member? <Link to="/signup">Register</Link>
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
              <FcGoogle className="icon_g" onClick={handlegoogleLogin} />
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
