import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// import { getDatabase } from "firebase/database";
import React, { useState } from "react";
import { app } from "../firebase";

const auth = getAuth(app);

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signinUser = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((value) => alert("signin"))
      .catch((err) => alert("email not match"));
  };
  return (
    <>
      <div className="signup-form text-center w-25 mx-auto mt-5 border py-4 px-4 rounded shadow">
        <h1>Signin</h1>
        <form action="">
          <div className="form-group text-start mb-3">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group text-start mb-4">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button className="btn btn-outline-primary" onClick={signinUser}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Signin;
