import { Link } from "react-router-dom";

const Category = () => {
  return (
    <div className="mt-5">
      <div className="container">
        <div className="cat-title fs-2 fw-bolder">Category</div>
        <div className="container mt-3">
          <div className="d-flex justify-content-center align-items-center">
            <Link to="/men" className="btn btn-outline-dark me-3">
              Male
            </Link>
            <Link to="/female" className="btn btn-outline-danger me-3">
              Female
            </Link>
            <Link to="/kids" className="btn btn-outline-secondary me-3">
              Kids
            </Link>
            <Link to="/all" className="btn btn-outline-warning ">
              All
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
