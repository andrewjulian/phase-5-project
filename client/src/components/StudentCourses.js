import React from "react";

const StudentCourses = ({ currentUser }) => {
  const { display_name, role } = currentUser;

  return (
    <div>
      <p>Hello, {display_name}</p>
      <p>These are your courses!</p>
      <p>You are a {role}</p>
    </div>
  );
};

export default StudentCourses;
