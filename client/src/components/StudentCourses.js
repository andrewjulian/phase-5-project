import React, { useContext } from "react";
import { UserContext } from "../context/userContext";
import CourseCard from "./CourseCard";

const StudentCourses = () => {
  const [currentUser, setCurrentUser] = useContext(UserContext);

  const { display_name, type } = currentUser;

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
  } else {
    displayClassrooms = "No Classes Yet";
  }

  return (
    <div>
      <p>Hello, {display_name}</p>
      <p>These are your courses!</p>
      <p>You are a {type}</p>
      <div className="grid grid-cols-4 gap-4 m-2">{displayClassrooms}</div>
    </div>
  );
};

export default StudentCourses;
