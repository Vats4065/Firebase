import React, { useEffect } from "react";
import { useState } from "react";
import fireDb from "../firebase";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const initalState = {
  name: "",
  email: "",
  contact: "",
};

function AddEdit() {
  const navigate = useNavigate();
  useEffect(() => {
    const getItem = localStorage.getItem("c-login");
    console.log(getItem);
    if (getItem) {
      navigate("/add");
    } else {
      navigate("/login");
    }
  }, []);

  useEffect(() => {
    const getItem = localStorage.getItem("c-login");
    console.log(getItem);
    if (getItem) {
      navigate(`/update/${id}`);
    } else {
      navigate("/login");
    }
  }, []);

  const [state, setState] = useState(initalState);
  const [data, setData] = useState({});
  const { name, email, contact } = state;

  const handleInput = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const { id } = useParams();

  useEffect(() => {
    fireDb.child("contacts").on("value", (res) => {
      if (res.val !== null) {
        setData({ ...res.val() });
      } else {
        setData({});
      }
    });
    return () => {
      setData({});
    };
  }, [id]);

  useEffect(() => {
    if (id) {
      setState({ ...data[id] });
    } else {
      setState({ ...initalState });
    }
    return () => {
      setState({ ...initalState });
    };
  }, [id, data]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !contact) {
      toast.error("please fill details");
    } else {
      if (!id) {
        fireDb.child("contacts").push(state, (err) => {
          if (err) {
            toast.error(err);
          } else {
            toast.success("contact Added");
          }
        });
        setTimeout(() => navigate("/", 500));
      }
    }
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    if (id) {
      fireDb.child(`contacts/${id}`).set(state, (err) => {
        if (err) {
          toast.error(err);
        } else {
          toast.success("contact update");
        }
      });
      setTimeout(() => navigate("/", 500));
    }
  };

  return (
    <div className="add-contact text-center w-25 mx-auto mt-5 border py-4 px-4 rounded shadow">
      <form action="">
        <div className="form-group text-start mb-3">
          <label htmlFor="exampleInputEmail1">Name</label>
          <input
            type="name"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter name"
            value={name || ""}
            name="name"
            onChange={handleInput}
            required
          />
        </div>
        <div className="form-group text-start mb-4">
          <label htmlFor="exampleInputPassword1">Email</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter Email"
            value={email || ""}
            name="email"
            onChange={handleInput}
            required
          />
        </div>
        <div className="form-group text-start mb-4">
          <label htmlFor="exampleInputPassword1">Contact</label>
          <input
            type="text"
            className="form-control"
            name="contact"
            id="exampleInputPassword1"
            placeholder="Enter Contact"
            value={contact || ""}
            onChange={handleInput}
            required
          />
        </div>

        {id ? (
          <button className="btn btn-outline-info" onClick={handleUpdate}>
            Update
          </button>
        ) : (
          <button className="btn btn-outline-primary" onClick={handleSubmit}>
            Submit
          </button>
        )}
      </form>
    </div>
  );
}

export default AddEdit;
