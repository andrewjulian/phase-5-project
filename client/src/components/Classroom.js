import React, { useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import { UserContext } from "../context/userContext";

const Classroom = () => {
  const location = useLocation();
  const data = location.state?.data;

  const [currentUser, setCurrentUser, errors, setErrors] =
    useContext(UserContext);

  const [messageBody, setMessageBody] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log("submit!");
  }

  return (
    <div>
      <div className="sm:container border-2 border-blue-500 rounded-md mx-auto p-2">
        Sample
      </div>
      <div className="sm:container border-2 border-blue-500 bg-blue-500 text-white rounded-md mx-auto px-2">
        <form onSubmit={handleSubmit}>
          <input
            className="border-2 border-white rounded-md text-black w-5/6 ml-20 pl-2"
            type="text"
            name="message"
            value={messageBody}
            onChange={(e) => setMessageBody(e.target.value)}
          />
          <button
            className="my-2 mx-4 border-white border-2 p-1 rounded-md"
            type="submit"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Classroom;
