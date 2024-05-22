import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaMeta } from "react-icons/fa6";
import "./login.css";
import { Link } from "react-router-dom";

const Login = () => {
    



  return (
    <div className="login w-50 mx-auto my-5 bg-light px-5 rounded">
      <form className="py-5">
        <div data-mdb-input-init className="form-outline mb-4">
          <input
            type="email"
            id="form2Example1"
            className="form-control"
            name="email"
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
          />
          <label className="form-label" htmlFor="form2Example2">
            Password
          </label>
        </div>

        {/* <div className="row mb-4">
          <div className="col d-flex justify-content-center">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="form2Example31"
                checked
              />
              <label className="form-check-label" htmlFor="form2Example31">
                {" "}
                Remember me{" "}
              </label>
            </div>
          </div>

          <div className="col">
            <a href="#!">Forgot password?</a>
          </div>
        </div> */}

        <button
          type="button"
          className="btn btn-primary btn-block mb-4 mx-auto "
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
            <FcGoogle className="icon_g" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
