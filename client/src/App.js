import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  const [count, setCount] = useState(0);
  const [currentUser, setCurrentUser] = useState(null);

  console.log("Running!");

  /* useEffect(() => {
    fetch("/auth").then((res) => {
      if (res.ok) {
        res.json().then((user) => setCurrentUser(user));
      }
    });
  }, []); */

  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);

  if (!currentUser)
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

  return (
    <div className="App">
      <Navbar setCurrentUser={setCurrentUser} />
      <Routes>
        <Route></Route>
      </Routes>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <h1>Page Count: {count}</h1>
    </div>
  );
}

export default App;
