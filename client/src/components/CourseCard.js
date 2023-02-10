import React, { useContext } from "react";
import { UserContext } from "../context/userContext";

const CourseCard = ({ unEnroll, classroom, handleDeleteClass }) => {
  const [currentUser] = useContext(UserContext);

  if (currentUser.type === "Student") {
    return (
      <div className="max-w-sm rounded border-2 overflow-hidden shadow-lg">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{classroom.name}</div>
          <p className="text-gray-700 text-base">{classroom.subject}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <button className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-blue-500 hover:text-white">
            Chatroom
          </button>
          <button
            onClick={() => unEnroll(classroom.id)}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-blue-500 hover:text-white"
          >
            Unenroll
          </button>
        </div>
      </div>
    );
  }

  if (currentUser.type === "Teacher") {
    return (
      <div className="max-w-sm rounded border-2 overflow-hidden shadow-lg">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{classroom.name}</div>
          <p className="text-gray-700 text-base">{classroom.subject}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <button className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-blue-500 hover:text-white">
            Chatroom
          </button>
          <button
            onClick={() => handleDeleteClass(classroom.id)}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm    font-semibold text-gray-700 mr-2 mb-2 hover:bg-blue-500 hover:text-white"
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
};

export default CourseCard;
