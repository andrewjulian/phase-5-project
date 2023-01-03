import React, { useContext } from "react";
import { UserContext } from "../context/userContext";

const Profile = () => {
  const [currentUser] = useContext(UserContext);

  const { display_name, role } = currentUser;

  return (
    <div>
      <p>Hello, {display_name}!</p>
      <p>You are a {role}</p>
      <p>Your image will be here as well!</p>
    </div>
  );
};

export default Profile;
