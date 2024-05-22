import React, { useState } from "react";
import "./signup.css";
import { FcGoogle } from "react-icons/fc";
import { FaMeta } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase";
import { toast } from "react-toastify";
import Loader from "../../components/Loader";

const Signup = () => {
  const [cpassword, setCpassword] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const handleGoogleSignup = () => {
    signInWithPopup(auth, provider)
      .then((data) => {
        const user = data.user.accessToken;
        console.log(user);
        localStorage.setItem("eshop-signup", user);
        toast.success("Welcome to eShop");
        navigate("/");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    console.log(email, password, cpassword);
    if (password !== cpassword) {
      toast.error("password not match");
    } else {
      setIsLoading(true);
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          setIsLoading(false);
          toast.success("Signup successful");
          navigate("/");
        })
        .catch((error) => {
          toast.error(error.message);
          setIsLoading(false);
        });
    }
  };

  return (
    <>
      {isLoading && <Loader />}
      <div className="signup w-50 mx-auto my-5 bg-light px-5 rounded">
        <form className="py-5">
          {/* <div data-mdb-input-init className="form-outline mb-4">
            <input
              type="email"
              id="form2Example1"
              className="form-control"
              name="username"
              value={username || ""}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label className="form-label" htmlFor="form2Example1">
              Username
            </label>
          </div> */}
          <div data-mdb-input-init className="form-outline mb-4">
            <input
              type="email"
              id="form2Example2"
              className="form-control"
              name="email"
              value={email || ""}
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
              value={password || ""}
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
              value={cpassword || ""}
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
    </>
  );
};

export default Signup;
