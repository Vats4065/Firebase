import React, { useEffect, useState } from "react";
import fireDb from "../firebase";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const getItem = localStorage.getItem("c-login");
    console.log(getItem);
    if (getItem) {
      navigate("/ ");
    } else {
      navigate("/login");
    }
  }, []);

  const [data, setData] = useState({});

  const onDelete = (id) => {
    if (window.confirm("are you sure for delete this contact?"))
      fireDb.child(`contacts/${id}`).remove((err) => {
        if (err) {
          toast.error(err);
        } else {
          toast.warn("contact delete");
        }
      });
  };

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
  }, []);

  console.log("asytf", data);
  return (
    <>
      <div className="mx-auto mt-5 ">
        <table className="table text-start table-dark table-striped table-hover w-50 mx-auto">
          <thead>
            <tr>
              <th scope="col">No.</th>
              <th scope="col">Name.</th>
              <th scope="col">Email.</th>
              <th scope="col">Contact.</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(data).map((id, index) => {
              console.log("asasasas", id);
              return (
                <>
                  <tr key={id}>
                    <th scope="row">{index + 1}</th>
                    <td>{data[id].name}</td>
                    <td>{data[id].email}</td>
                    <td>{data[id].contact}</td>
                    <td className="d-flex">
                      <Link to={`/update/${id}`}>
                        <button
                          className="btn btn-info me-3"
                          onClick={() => {
                            localStorage.setItem("edit", "true");
                          }}
                        >
                          Edit
                        </button>
                      </Link>

                      <button
                        className="btn btn-danger me-3"
                        onClick={() => onDelete(id)}
                      >
                        Delete
                      </button>

                      <Link to={`/view/${id}`}>
                        <button className="btn btn-light">View</button>
                      </Link>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Home;
