import React, { useContext } from "react";
import { UserContext } from "../context/userContext";
import CourseCard from "./CourseCard";

const StudentCourses = () => {
  const [currentUser, setCurrentUser] = useContext(UserContext);

  function updateEnrollments(unenrolled) {
    const currentEnrollments = currentUser.classrooms.filter((classroom) => {
      return classroom.id !== unenrolled.classroom.id;
    });

    setCurrentUser({ ...currentUser, classrooms: currentEnrollments });
  }

  function unEnroll(room_id) {
    fetch(`/enrollments/${room_id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((r) => r.json())
      .then((data) => updateEnrollments(data));
  }

  let displayClassrooms = null;

  if (currentUser.classrooms !== undefined) {
    if (currentUser.classrooms.length > 0) {
      displayClassrooms = currentUser.classrooms.map((classroom, id) => {
        return (
          <CourseCard
            currentUser={currentUser}
            classroom={classroom}
            key={id}
            unEnroll={unEnroll}
          />
        );
      });
    }
  } else {
    displayClassrooms = "No Classes Yet";
  }

  return (
    <div>
      <h1 className=" text-center text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
        Current Courses
      </h1>
      <br />
      <div className="grid grid-cols-4 gap-4 m-2">{displayClassrooms}</div>
    </div>
  );
};

export default StudentCourses;
