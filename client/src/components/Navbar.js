import React from "react";
import "../index.css";
import { NavLink as Link, redirect } from "react-router-dom";

const Navbar = ({ currentUser, setCurrentUser }) => {
  const { display_name } = currentUser;

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
      <nav className="flex border-b">
        <div className="title">AsynchEdu</div>
        <div className="navbar-items">
          <p>{display_name}</p>
          <Link className="-mb-px mr-1" to="/mycourses">
            <p className="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold">
              My Courses
            </p>
          </Link>
          <Link className="navbar-links" to="/coursecatalogue">
            <p>Course Catalog</p>
          </Link>
          <button
            className="text-slate-500 hover:text-blue-600"
            onClick={handleLogoutClick}
          >
            Logout
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

<a
  class="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold"
  href="#"
>
  Active
</a>;
