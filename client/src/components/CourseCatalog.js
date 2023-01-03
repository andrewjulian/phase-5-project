import React from "react";

const CourseCatalog = ({ currentUser }) => {
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
