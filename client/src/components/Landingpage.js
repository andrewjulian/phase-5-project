import React, { useContext } from "react";
import { UserContext } from "../context/userContext";

const Landingpage = () => {
  const [currentUser] = useContext(UserContext);

  const { display_name, type } = currentUser;

  return (
    <div>
      <h1>HI!</h1>
      <h1>Welcome {display_name}!</h1>
      <h2>Your role is: {type}, yes!</h2>
    </div>
  );
};

export default Landingpage;
