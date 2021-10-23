import { Link } from "react-router-dom";
import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container">
        <Link className="text-decoration-none h1" to="/">
          X-MEN APP
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
