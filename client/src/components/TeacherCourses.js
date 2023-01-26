import React, { useState, useContext } from "react";
import { UserContext } from "../context/userContext";

const TeacherCourses = ({ addClassroom, removeClassroom }) => {
  const [currentUser] = useContext(UserContext);

  const { display_name, type } = currentUser;

  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [errors, setErrors] = useState([]);

  let displayClassrooms = null;

  /*   function deleteClassroom() {
    fetch(`/classrooms/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((r) => r.json())
      .then((data) => removeClassroom(data));
  } */

  function handleSubmit(e) {
    e.preventDefault();

    fetch("/classrooms", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        subject: subject,
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

  if (currentUser.classrooms.length != 0) {
    displayClassrooms = currentUser.classrooms.map((classroom) => {
      return (
        <div
          key={classroom.id}
          className="max-w-sm rounded overflow-hidden shadow-lg"
        >
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{classroom.name}</div>
            <p className="text-gray-700 text-base">{classroom.subject}</p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <button className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              Visit
            </button>
            <button
              /* onClick={deleteClassroom} */
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              Delete
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
      <p>Hello, {display_name}!</p>
      <p>You are a {type}</p>
      <p>This is where the classes you teach can be found!</p>
      <br />
      <div className="grid grid-cols-4 gap-4">
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
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
            <select
              onChange={(e) => setSubject(e.target.value)}
              defaultValue=""
            >
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
        </div>
        {displayClassrooms}
      </div>
    </div>
  );
};

export default TeacherCourses;
