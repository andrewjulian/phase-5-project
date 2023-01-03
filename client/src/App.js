import { useState, useEffect, useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Landingpage from "./components/Landingpage";
import SNavbar from "./components/SNavbar";
import TNavbar from "./components/TNavbar";
import StudentCourses from "./components/StudentCourses";
import Profile from "./components/Profile";
import CourseCatalog from "./components/CourseCatalog";
import TeacherCourses from "./components/TeacherCourses";

import { UserContext } from "./context/userContext";

/* new */

function App() {
  //const [currentUser, setCurrentUser] = useState(null);

  const [currentUser, setCurrentUser] = useContext(UserContext);

  useEffect(() => {
    fetch("/auth").then((res) => {
      if (res.ok) {
        res.json().then((user) => setCurrentUser(user));
      }
    });
  }, []);

  if (!currentUser) {
    return (
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    );
  }

  if (currentUser.role === "teacher") {
    return (
      <div className="App">
        <TNavbar />
        <Routes>
          <Route path="/landingpage" element={<Landingpage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/mycourses" element={<TeacherCourses />} />
          <Route path="*" element={<Navigate to="/landingpage" replace />} />
        </Routes>
      </div>
    );
  }

  if (currentUser.role === "student") {
    return (
      <div className="App">
        <SNavbar />
        <Routes>
          <Route path="/landingpage" element={<Landingpage />} />
          <Route path="/mycourses" element={<StudentCourses />} />
          <Route path="/coursecatalog" element={<CourseCatalog />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<Navigate to="/landingpage" replace />} />
        </Routes>
      </div>
    );
  }
}

export default App;
