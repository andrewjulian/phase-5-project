import React, { useState, useContext } from "react";
import { UserContext } from "../context/userContext";

const TeacherCourses = ({ addClassroom, classrooms }) => {
  const [currentUser] = useContext(UserContext);

  const { display_name, role } = currentUser;

  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [errors, setErrors] = useState([]);

  const displayClassrooms = classrooms.map((classroom, id) => {
    return <p key={id}>{classroom.name}</p>;
  });

  function handleSubmit(e) {
    e.preventDefault();

    fetch("/classrooms", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        subject,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((r) => {
          addClassroom(r);
          console.log(r);
        });
      } else {
        r.json().then((err) => setErrors(err.errors));
        console.log("booooo");
        console.log(errors);
      }
    });

    setName("");
    setSubject("");
  }

  return (
    <div>
      <p>Hello, {display_name}!</p>
      <p>You are a {role}</p>
      <p>This is where the classes you teach can be found!</p>
      <br />
      <h1>Create new Course</h1>
      <form onSubmit={handleSubmit}>
        <label>Class Title</label>
        <input
          type="text"
          value={name}
          placeholder="Enter Course Name"
          onChange={(e) => setName(e.target.value)}
          required
        ></input>
        <br />
        <label>Course</label>
        <select onChange={(e) => setSubject(e.target.value)} defaultValue="">
          <option value="" disabled>
            Choose a Class...
          </option>
          <option value="Math">Math</option>
          <option value="Science">Science</option>
          <option value="History">History</option>
          <option value="English">English</option>
          <option value="Foreign Language">Foreign Language</option>
        </select>
        <br />
        <button type="submit">Create!</button>
      </form>
      {displayClassrooms}
    </div>
  );
};

export default TeacherCourses;
