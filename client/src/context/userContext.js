import React, { createContext, useState } from "react";

//create the context object
const UserContext = createContext();

//create the context provider
function UserProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [errors, setErrors] = useState([]);

  function enroll(e) {
    e.preventDefault();

    fetch("/enrollments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        //user_id: currentUser.id,
        classroom_id: e.target.value,
      }),
    }).then((r) => {
      if (r.ok) {
        if (currentUser.classrooms !== undefined) {
          r.json().then((r) => {
            setCurrentUser({
              ...currentUser,
              classrooms: [...currentUser.classrooms, r.classroom],
            });
          });
        } else {
          r.json().then((r) => {
            setCurrentUser({
              ...currentUser,
              classrooms: [r.classroom],
            });
          });
        }
      } else {
        r.json().then((err) => setErrors(err.errors));
        console.log("booooo");
        console.log(errors);
      }
    });
  }

  const value = [currentUser, setCurrentUser, enroll];

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

//export
export { UserContext, UserProvider };
