import React, { useContext } from "react";
import { UserContext } from "../context/userContext";

const StudentCourses = () => {
  const [currentUser] = useContext(UserContext);

  const { display_name, type, enrollments, classrooms } = currentUser;

  console.log("enrollments", { enrollments });
  console.log("classrooms", { classrooms });

  return (
    <div>
      <p>Hello, {display_name}</p>
      <p>These are your courses!</p>
      <p>You are a {type}</p>
    </div>
  );
};

export default StudentCourses;
