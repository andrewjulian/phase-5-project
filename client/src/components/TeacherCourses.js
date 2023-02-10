import React, { useState, useContext } from "react";
import { UserContext } from "../context/userContext";
import CourseCard from "./CourseCard";

const TeacherCourses = () => {
  const [currentUser, setCurrentUser, classrooms, setClassrooms] =
    useContext(UserContext);

  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [errors, setErrors] = useState([]);

  let displayClassrooms = null;

  function addClassroom(newClassroom) {
    setClassrooms([...classrooms, newClassroom]);

    setCurrentUser({
      ...currentUser,
      classrooms: [...currentUser.classrooms, newClassroom],
    });
  }

  function updateClassrooms(deletedClass) {
    const currentEnrollments = currentUser.classrooms.filter((classroom) => {
      return classroom.id !== deletedClass.id;
    });

    setCurrentUser({ ...currentUser, classrooms: currentEnrollments });
  }

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

  function handleDeleteClass(deletedClassId) {
    fetch(`/classrooms/${deletedClassId}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((r) => r.json())
      .then((data) => updateClassrooms(data));
  }

  if (currentUser.classrooms.length > 0) {
    displayClassrooms = currentUser.classrooms.map((classroom, id) => {
      return (
        <CourseCard
          classroom={classroom}
          handleDeleteClass={handleDeleteClass}
          currentUser={currentUser}
          key={id}
        />
      );
    });
  } else {
    displayClassrooms = "No Classes Yet";
  }

  return (
    <div>
      <h1 className=" text-center text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
        Current Courses
      </h1>
      <br />
      <div className="grid grid-cols-4 gap-4 m-2">
        <div className="max-w-sm border-2 border-blue-500 rounded overflow-hidden shadow-lg p-2">
          <h1 className="font-bold text-xl mb-2">Create New Course</h1>
          <form onSubmit={handleSubmit}>
            <label className="font-bold">Class Title: </label>
            <input
              type="text"
              value={name}
              placeholder="Enter Course Name"
              onChange={(e) => setName(e.target.value)}
              required
            ></input>
            <br />
            <label className="font-bold">Subject: </label>
            <select
              onChange={(e) => setSubject(e.target.value)}
              defaultValue=""
            >
              <option value="" disabled>
                Choose a Subject...
              </option>
              <option value="Math">Math</option>
              <option value="Science">Science</option>
              <option value="History">History</option>
              <option value="English">English</option>
              <option value="Foreign Language">Foreign Language</option>
            </select>
            <br />
            <button
              type="submit"
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mt-2 mb-2 mr-2 hover:text-white hover:bg-blue-500"
            >
              Create!
            </button>
          </form>
        </div>
        {displayClassrooms}
      </div>
    </div>
  );
};

export default TeacherCourses;
