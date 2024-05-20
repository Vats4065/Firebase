import React from "react";
import fireDb from "../firebase";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

function View() {
  const [user, setUser] = useState({});

  const { id } = useParams();

  useEffect(() => {
    fireDb
      .child(`contacts${id}`)
      .get()
      .then((res) => {
        if (res.exists()) {
          setUser({ ...res.val() });
        } else {
          setUser({});
        }
      });
  }, [id]);

  console.log("user", user);

  return <div>View</div>;
}

export default View;
