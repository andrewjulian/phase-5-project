import React, { useContext } from "react";
import "../index.css";
import { NavLink as Link, redirect } from "react-router-dom";

import { UserContext } from "../context/userContext";

const SNavbar = () => {
  const [currentUser, setCurrentUser] = useContext(UserContext);

  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setCurrentUser(null);
        redirect("/");
      }
    });
  }

  return (
    <nav className="bg-white border-gray-200 py-2.5 rounded">
      <div className="container flex place-items-center justify-between mx-auto">
        <div className="container flex flex-wrap">
          <img
            src={process.env.PUBLIC_URL + "/asyncedu_logo.png"}
            className="h-6 mr-3 justify-start"
            alt="Flowbite Logo"
          />
          <span className="justify-start text-xl font-semibold whitespace-nowrap dark:text-white">
            AsyncEdu
          </span>
        </div>
        <div className="w-full justify-end" id="navbar-default">
          <div className="flex justify-end gap-x-2">
            <Link className="mr-6" to="/mycourses">
              <p className="text-blue-500 hover:text-blue-800">My Courses</p>
            </Link>
            <Link className="mr-6" to="/coursecatalog">
              <p className="text-blue-500 hover:text-blue-800">
                Course Catalog
              </p>
            </Link>
            <Link className="mr-6" to="/profile">
              <p className="text-blue-500 hover:text-blue-800">Profile</p>
            </Link>
            <button
              className="bg-blue-500 hover:bg-red-700 text-white font-bold px-3 rounded-full"
              onClick={handleLogoutClick}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SNavbar;
