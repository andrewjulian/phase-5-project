import React, { useState } from "react";
import { NavLink as Link } from "react-router-dom";
import "../index.css";

const Signup = ({ setCurrentUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");

  function handleLoginSubmit(e) {
    e.preventDefault();
    /*
    const user = {
      username,
      password,
      display_name: displayName,
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
    }); */

    console.log("Yes! Signup!");
    setUsername("");
    setPassword("");
    setDisplayName("");
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
          value={username}
          onChange={(e) => setUsername(e.target.value)}
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
        <label htmlFor="psw">
          <b>Display Name: </b>
        </label>
        <input
          type="text"
          placeholder="Enter Display Name"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
          id="psw"
          required
        ></input>
        <br />
        <br />
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
