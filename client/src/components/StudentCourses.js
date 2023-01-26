import React, { useContext } from "react";
import { UserContext } from "../context/userContext";

const StudentCourses = () => {
  const [currentUser] = useContext(UserContext);

  const { display_name, type } = currentUser;

  let displayClassrooms = null;

  if (currentUser.classrooms.length > 0) {
    displayClassrooms = currentUser.classrooms.map((classroom, id) => {
      return (
        <div key={id} className="max-w-sm rounded overflow-hidden shadow-lg">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{classroom.name}</div>
            <p className="text-gray-700 text-base">{classroom.subject}</p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <button className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              Visit
            </button>
          </div>
        </div>
      );
    });
  } else {
    displayClassrooms = "No Classes Yet";
  }

  return (
    <div>
      <p>Hello, {display_name}</p>
      <p>These are your courses!</p>
      <p>You are a {type}</p>
      {displayClassrooms}
    </div>
  );
};

export default StudentCourses;
