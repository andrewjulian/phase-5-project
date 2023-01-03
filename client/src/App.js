import { useState, useEffect } from "react";
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

/* new */

function App() {
  const [currentUser, setCurrentUser] = useState(null);

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
        <Route
          path="/signup"
          element={<Signup setCurrentUser={setCurrentUser} />}
        />
        <Route
          path="/login"
          element={<Login setCurrentUser={setCurrentUser} />}
        />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    );
  }

  if (currentUser.role === "teacher") {
    return (
      <div className="App">
        <TNavbar currentUser={currentUser} setCurrentUser={setCurrentUser} />
        <Routes>
          <Route
            path="/landingpage"
            element={<Landingpage currentUser={currentUser} />}
          />
          <Route
            path="/profile"
            element={<Profile currentUser={currentUser} />}
          />
          <Route
            path="/mycourses"
            element={<TeacherCourses currentUser={currentUser} />}
          />
          <Route
            path="*"
            element={
              <Navigate to="/landingpage" currentUser={currentUser} replace />
            }
          />
        </Routes>
      </div>
    );
  }

  if (currentUser.role === "student") {
    return (
      <div className="App">
        <SNavbar currentUser={currentUser} setCurrentUser={setCurrentUser} />
        <Routes>
          <Route
            path="/landingpage"
            element={<Landingpage currentUser={currentUser} />}
          />
          <Route
            path="/mycourses"
            element={<StudentCourses currentUser={currentUser} />}
          />
          <Route
            path="/coursecatalog"
            element={<CourseCatalog currentUser={currentUser} />}
          />
          <Route
            path="/profile"
            element={<Profile currentUser={currentUser} />}
          />
          <Route
            path="*"
            element={
              <Navigate to="/landingpage" currentUser={currentUser} replace />
            }
          />
        </Routes>
      </div>
    );
  }
}

export default App;
