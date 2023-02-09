import React, { useContext, useState } from "react";
import { UserContext } from "../context/userContext";

const CourseCatalog = ({ classrooms }) => {
  const [currentUser, setCurrentUser, enroll] = useContext(UserContext);

  let displayClassrooms = null;
  let unEnrolledClassrooms = null;

  if (currentUser.classrooms !== undefined) {
    unEnrolledClassrooms = classrooms.filter(
      (classroom) =>
        !currentUser.classrooms.find((room) => room.id === classroom.id)
    );
  } else {
    unEnrolledClassrooms = classrooms;
  }

  if (unEnrolledClassrooms.length === 0) {
    displayClassrooms = "No Unenrolled Classrooms";
  } else {
    displayClassrooms = unEnrolledClassrooms.map((classroom, id) => {
      return (
        <div
          key={id}
          className="max-w-sm rounded border-2 overflow-hidden shadow-lg"
        >
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
  }

  return (
    <div>
      <h1 className=" text-center text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
        Course Catalog
      </h1>
      <br />
      <div className="grid grid-cols-4 gap-4 m-2">{displayClassrooms}</div>
    </div>
  );
};

export default CourseCatalog;
