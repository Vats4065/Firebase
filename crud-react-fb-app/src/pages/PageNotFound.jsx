import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <>
      <div>PageNotFound</div>
      <Link to="/" className="btn btn-warning">
        Back to Home
      </Link>
    </>
  );
}

export default PageNotFound;
