import React from "react";
import fireDb from "../firebase";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

function View() {
  const [user, setUser] = useState({});

  const { id } = useParams();

  const navigate = useNavigate();
  useEffect(() => {
    fireDb
      .child(`contacts/${id}`)
      .get()
      .then((snapshot) => {
        console.log(snapshot);
        if (snapshot.exists()) {
          setUser({ ...snapshot.val() });
        } else {
          setUser({});
        }
      });
  }, [id]);
  console.log("user", user);

  const getItem = localStorage.getItem("c-login")
  console.log(getItem);
  useEffect(() => {
    if (getItem) {
      navigate(`/view/${id}`)
    }
    else {
      navigate("/login")
    }
  },[])

  return (
    <div className="mt-5">
      <div className="card w-50 mx-auto pb-2">
        <div className="card-header mb-2">
          <p className="fs-3 fw-bold">Contact Details</p>
        </div>
        <div className="container">
          <strong>ID:</strong>
          <span className="ms-1">{id}</span>
          <br />
          <br />
          <strong>Name:</strong>
          <span className="ms-1">{user.name}</span>
          <br />
          <br />
          <strong>Email:</strong>
          <span className="ms-1">{user.email}</span>
          <br />
          <br />
          <strong>Phone Number:</strong>
          <span className="ms-1">{user.contact}</span>
          <br />
          <br />
          <Link className="btn btn-success" to="/">Back</Link>
        </div>
      </div>
    </div>
  );
}

export default View;
