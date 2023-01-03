import React, { useContext } from "react";
import { UserContext } from "../context/userContext";

const CourseCatalog = () => {
  const [currentUser] = useContext(UserContext);

  const { display_name, role } = currentUser;

  return (
    <div>
      <p>Hello, {display_name}!</p>
      <p>This is your course catalog page</p>
      <p>As a {role} you can sign up for new courses!</p>
    </div>
  );
};

export default CourseCatalog;
