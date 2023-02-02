import React, { useContext } from "react";
import { UserContext } from "../context/userContext";
import CourseCard from "./CourseCard";

const StudentCourses = () => {
  const [currentUser, setCurrentUser] = useContext(UserContext);

  const { display_name, type } = currentUser;

  console.log("current user courses", currentUser.classrooms);

  function updateEnrollments(unenrolled) {
    console.log("update enrollments", unenrolled);
    const currentEnrollments = currentUser.classrooms.filter((classroom) => {
      return classroom.id !== unenrolled.classroom.id;
    });

    console.log("currentEnrollments", currentEnrollments);

    setCurrentUser({ ...currentUser, classrooms: currentEnrollments });

    console.log("currentuser", currentUser.classrooms);
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
      return <CourseCard classroom={classroom} key={id} unEnroll={unEnroll} />;
    });
  } else {
    displayClassrooms = "No Classes Yet";
  }

  return (
    <div>
      <p>Hello, {display_name}</p>
      <p>These are your courses!</p>
      <p>You are a {type}</p>
      <div className="grid grid-cols-4 gap-4">{displayClassrooms}</div>
    </div>
  );
};

export default StudentCourses;
