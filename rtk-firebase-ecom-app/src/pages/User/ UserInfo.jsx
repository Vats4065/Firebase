import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../../firebase";
import { Link } from "react-router-dom";

const UserInfo = () => {
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (user.displayName === null) {
        const ul = user.email.substring(0, user.email.indexOf("@"));
        const uname = ul.charAt(0).toUpperCase() + ul.slice(1);
        console.log(uname);
        setUsername(uname);
        setEmail(user.email);
      } else {
        setUsername(user.displayName);
        setEmail(user.email);
      }
    });
  }, []);
  const [email, setEmail] = useState();
  const [username, setUsername] = useState("");

  return (
    <div className="card mt-5 mx-auto" style={{ width: " 18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{username}</h5>

        <p className="card-text">{email}</p>
      </div>
      <Link to="/" className="btn btn-warning">
        Back To Home
      </Link>
    </div>
  );
};

export default UserInfo;
