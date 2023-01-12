import React, { useContext } from "react";
import { UserContext } from "../context/userContext";

const CourseCatalog = ({ classrooms }) => {
  const [currentUser] = useContext(UserContext);

  const { display_name, role } = currentUser;

  function enroll() {
    console.log("enroll!");
  }

  const displayClassrooms = classrooms.map((classroom, id) => {
    return (
      <div key={id} className="max-w-sm rounded overflow-hidden shadow-lg">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{classroom.name}</div>
          <p className="text-gray-700 text-base">{classroom.subject}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <button
            onClick={enroll}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >
            Enroll
          </button>
        </div>
      </div>
    );
  });

  return (
    <div>
      <p>Hello, {display_name}!</p>
      <p>This is your course catalog page</p>
      <p>As a {role} you can sign up for new courses!</p>
      <br />
      <div className="grid grid-cols-4 gap-4">{displayClassrooms}</div>
    </div>
  );
};

export default CourseCatalog;
