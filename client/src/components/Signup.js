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

  return (
    <div className="signup">
      <h1>Sign Up for AsyncEdu!</h1>
      <form onSubmit={handleLoginSubmit}>
        <label htmlFor="email">
          <b>Email: </b>
        </label>
        <input
          type="text"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="email"
          required
        ></input>
        <br />
        <br />
        <label htmlFor="psw">
          <b>Password: </b>
        </label>
        <input
          type="text"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          id="psw"
          required
        ></input>
        <br />
        <br />
        <label htmlFor="display name">
          <b>Display Name: </b>
        </label>
        <input
          type="text"
          placeholder="Enter Display Name"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
          id="display"
          required
        ></input>
        <br />
        <br />
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

        <p>By creating an account you agree to our Terms & Privacy</p>
        <button type="submit" className="registerbtn">
          Register!
        </button>
      </form>

      <div className="signin">
        <p>Already have an account? Sign in</p>
        <button className="accountbtn">
          <Link to="/login">Login</Link>
        </button>
      </div>
    </div>
  );
};

export default Signup;
