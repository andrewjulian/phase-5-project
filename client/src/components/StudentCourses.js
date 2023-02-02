import React, { useContext } from "react";
import { UserContext } from "../context/userContext";
import CourseCard from "./CourseCard";

const StudentCourses = () => {
  const [currentUser] = useContext(UserContext);

  const { display_name, type } = currentUser;

  function unEnroll(room_id) {
    console.log("delete clicked");
    console.log("room id", room_id);

    fetch(`/enrollments/${room_id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((r) => r.json())
      .then((data) => console.log(data));
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
