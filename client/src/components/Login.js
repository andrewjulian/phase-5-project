import React from "react";
import { useState } from "react";
import { NavLink as Link } from "react-router-dom";

const Login = ({ setCurrentUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }
  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleLoginSubmit(e) {
    e.preventDefault();

    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          setCurrentUser(user);
          console.log("new user!");
        });
      } else {
        setErrors(errors);
      }
    });

    console.log("Yes! Login!");
    setEmail("");
    setPassword("");
  }

  return (
    <div>
      <div className="login">
        <h1>Login to AsyncEdu!</h1>
        <form onSubmit={handleLoginSubmit}>
          <label htmlFor="email">
            <b>Email: </b>
          </label>
          <input
            type="text"
            placeholder="Enter Email"
            value={email}
            onChange={handleEmailChange}
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
            onChange={handlePasswordChange}
            id="psw"
            required
          ></input>
          <br />
          <p>By creating an account you agree to our Terms & Privacy</p>
          <button type="submit" className="registerbtn">
            Log In
          </button>
        </form>

        <div className="signin">
          <p>Don't have an account?</p>
          <button className="accountbtn">
            <Link to="/signup">Sign Up!</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
