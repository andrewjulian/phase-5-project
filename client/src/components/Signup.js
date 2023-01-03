import React, { useState } from "react";
import { NavLink as Link } from "react-router-dom";
import "../index.css";

const Signup = ({ setCurrentUser }) => {
  const [displayName, setDisplayName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [errors, setErrors] = useState([]);

  function handleLoginSubmit(e) {
    e.preventDefault();

    const user = {
      email,
      password,
      display_name: displayName,
      role,
    };

    fetch("/users", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(user),
    }).then((res) => {
      if (res.ok) {
        res.json().then(setCurrentUser(user));
      } else {
        console.log(errors);
      }
    });

    console.log("Yes! Signup!");
    setEmail("");
    setPassword("");
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }
  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleDisplayNameChange(event) {
    setDisplayName(event.target.value);
  }

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img
            className="w-8 h-8 mr-2"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
            alt="logo"
          />
          AsyncEdu
        </div>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign Up For An Account!
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              onSubmit={handleLoginSubmit}
            >
              <div>
                <label
                  for="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your Email
                </label>
                <input
                  type="text"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  value={email}
                  onChange={handleEmailChange}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="text"
                  id="password"
                  placeholder="Enter Password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={password}
                  onChange={handlePasswordChange}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="displayName"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Display Name
                </label>
                <input
                  type="text"
                  id="displayName"
                  placeholder="Create Display Name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={displayName}
                  onChange={handleDisplayNameChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="role">
                  <b>Role </b>
                </label>
                <select
                  type="text"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                >
                  <option value="" disabled>
                    Choose a Role...
                  </option>
                  <option value="student">Student</option>
                  <option value="teacher">Teacher</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Register and Sign In!
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already Have An Account?{" "}
              </p>
              <Link
                to="/login"
                className="font-medium text-gray-600 hover:italic dark:text-blue-500"
              >
                Log In
              </Link>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
