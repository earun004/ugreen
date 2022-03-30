import React from "react";
import Header from "./Navbar/Header";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <Header />
      <div
        style={{
          textAlign: "center",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <h1 className="d-block">404 Error page</h1>
        <p>Sorry this page not found.</p>
        {/* <a href="/" className="btn btn-success" style={{ color: "#fff" }}>
          Go back
        </a> */}
        <Link to="/" className="btn btn-success">
          Go back
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
