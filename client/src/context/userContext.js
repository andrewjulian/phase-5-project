import React, { createContext, useState } from "react";

//create the context object
const UserContext = createContext();

//create the context provider
function UserProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [classrooms, setClassrooms] = useState([]);
  const [messages, setMessages] = useState([]);

  const value = [
    currentUser,
    setCurrentUser,
    classrooms,
    setClassrooms,
    messages,
    setMessages,
  ];

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

//export
export { UserContext, UserProvider };
