import React, { useContext, useState } from "react";
import { UserContext } from "../context/userContext";

const CourseCatalog = ({ classrooms }) => {
  const [currentUser, setCurrentUser, userEnrollUpdate] =
    useContext(UserContext);

  //need to add function that adds course to student enrollments on front end
  //then set that as current user so it can be displayed on front end

  const [errors, setErrors] = useState([]);

  const { display_name, type } = currentUser;

  function enroll(e) {
    console.log("enroll");

    e.preventDefault();

    fetch("/enrollments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: currentUser.id,
        classroom_id: e.target.value,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((r) => {
          userEnrollUpdate(r.classroom);
        });
      } else {
        r.json().then((err) => setErrors(err.errors));
        console.log("booooo");
        console.log(errors);
      }
    });
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
            value={classroom.id}
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
      <p>As a {type} you can sign up for new courses!</p>
      <br />
      <div className="grid grid-cols-4 gap-4">{displayClassrooms}</div>
    </div>
  );
};

export default CourseCatalog;
