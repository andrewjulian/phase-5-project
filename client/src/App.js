import { useState, useEffect, useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import SNavbar from "./components/SNavbar";
import TNavbar from "./components/TNavbar";
import StudentCourses from "./components/StudentCourses";
import Profile from "./components/Profile";
import CourseCatalog from "./components/CourseCatalog";
import TeacherCourses from "./components/TeacherCourses";

import { UserContext } from "./context/userContext";

/* new */

function App() {
  const [currentUser, setCurrentUser] = useContext(UserContext);
  const [classrooms, setClassrooms] = useState([]);

  useEffect(() => {
    fetch("/auth").then((res) => {
      if (res.ok) {
        res.json().then((user) => setCurrentUser(user));
      }
    });
  }, [setCurrentUser]);

  useEffect(() => {
    fetch("/classrooms").then((res) => {
      if (res.ok) {
        res.json().then((r) => {
          setClassrooms(r);
        });
      }
    });
  }, [setCurrentUser]);

  function addClassroom(newClassroom) {
    setClassrooms([...classrooms, newClassroom]);

    setCurrentUser({
      ...currentUser,
      classrooms: [...currentUser.classrooms, newClassroom],
    });
  }

  if (!currentUser) {
    return (
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    );
  }

  if (currentUser.type === "Teacher") {
    return (
      <div className="App">
        <TNavbar />
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route
            path="/mycourses"
            element={
              <TeacherCourses
                classrooms={classrooms}
                addClassroom={addClassroom}
              />
            }
          />
          <Route path="*" element={<Navigate to="/mycourses" replace />} />
        </Routes>
      </div>
    );
  }

  if (currentUser.type === "Student") {
    return (
      <div className="App">
        <SNavbar />
        <Routes>
          <Route path="/mycourses" element={<StudentCourses />} />
          <Route
            path="/coursecatalog"
            element={
              <CourseCatalog
                classrooms={classrooms}
                /* userEnrollUpdate={userEnrollUpdate} */
              />
            }
          />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<Navigate to="/mycourses" replace />} />
        </Routes>
      </div>
    );
  }
}

export default App;
