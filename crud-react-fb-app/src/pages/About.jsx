import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();
  const getItem = localStorage.getItem("c-login");
  console.log(getItem);
  useEffect(() => {
    if (getItem) {
      navigate("/");
    } else {
      navigate("/login");
    }
  });
  return <div>About</div>;
}

export default About;
