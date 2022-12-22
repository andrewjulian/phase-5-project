import React from "react";
import "../index.css";
import { NavLink as Link, redirect } from "react-router-dom";

const SNavbar = ({ currentUser, setCurrentUser }) => {
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
    <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
      <div class="container flex flex-wrap items-center justify-between mx-auto">
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          class="h-6 mr-3 sm:h-9"
          alt="Flowbite Logo"
        />
        <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
          AsyncEdu
        </span>
        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
          <div class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <Link to="/mycourses">
              <p>Courses</p>
            </Link>
            <Link to="/coursecatalog">
              <p>Course Catalog</p>
            </Link>
            <Link to="/profile">
              <p>Profile</p>
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
