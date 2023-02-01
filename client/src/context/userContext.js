import React, { createContext, useState } from "react";

//create the context object
const UserContext = createContext();

//create the context provider
function UserProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  const value = [currentUser, setCurrentUser];

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

//export
export { UserContext, UserProvider };
