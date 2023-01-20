import React, { useContext } from "react";
import { UserContext } from "../context/userContext";

const StudentCourses = () => {
  const [currentUser] = useContext(UserContext);

  const { display_name, role, enrollments } = currentUser;

  console.log("enrollments", { enrollments });
  return (
    <div>
      <p>Hello, {display_name}</p>
      <p>These are your courses!</p>
      <p>You are a {role}</p>
    </div>
  );
};

export default StudentCourses;
