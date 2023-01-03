import React, { useContext } from "react";
import { UserContext } from "../context/userContext";

const TeacherCourses = () => {
  const [currentUser] = useContext(UserContext);

  const { display_name, role } = currentUser;

  return (
    <div>
      <p>Hello, {display_name}!</p>
      <p>You are a {role}</p>
      <p>This is where the classes you teach can be found!</p>
    </div>
  );
};

export default TeacherCourses;
