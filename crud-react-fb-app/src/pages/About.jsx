import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();

  useEffect(() => {
    const getItem = localStorage.getItem("c-login");
    console.log(getItem);
    if (getItem) {
      navigate("/about");
    } else {
      navigate("/login");
    }
  },[]);
  return <div>About</div>;
}

export default About;
