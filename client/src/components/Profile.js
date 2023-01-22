import React, { useContext } from "react";
import { UserContext } from "../context/userContext";

const Profile = () => {
  const [currentUser] = useContext(UserContext);

  const { display_name, type } = currentUser;

  return (
    <div>
      <p>Hello, {display_name}!</p>
      <p>You are a {type}</p>
      <p>Your image will be here as well!</p>
    </div>
  );
};

export default Profile;
