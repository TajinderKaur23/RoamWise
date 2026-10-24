import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center text-center"
         style={{ height: "80px" ,marginTop:"150px"}}>
      <div>
        <h1 className="display-1 fw-bold text-primary">404</h1>

        <h2 className="mb-3">Page Not Found</h2>

        
        <Link to="/" className="btn btn-primary px-4">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;