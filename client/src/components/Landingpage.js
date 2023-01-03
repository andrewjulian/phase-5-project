import React from "react";
import TNavbar from "./TNavbar";
import SNavbar from "./SNavbar";

const Landingpage = ({ currentUser }) => {
  const { display_name, role } = currentUser;

  return (
    <div>
      <h1>Welcome {display_name}!</h1>
      <h2>Your role is: {role}</h2>
    </div>
  );
};

export default Landingpage;
