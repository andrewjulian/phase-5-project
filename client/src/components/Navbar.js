import React from "react";
import "../index.css";
import { NavLink as Link, redirect } from "react-router-dom";

const Navbar = ({ setCurrentUser }) => {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setCurrentUser(null);
        redirect("/");
      }
    });
  }

  return (
    <div>
      <nav className="navbar">
        <div className="title">AsynchEdu</div>
        <div className="navbar-items">
          <Link className="navbar-links" to="/mycourses">
            My Courses
          </Link>
          <Link className="navbar-links" to="/coursecatalogue">
            Course Catalog
          </Link>
          <button onClick={handleLogoutClick}>Logout</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
