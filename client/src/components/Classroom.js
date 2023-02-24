import React, { useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import { UserContext } from "../context/userContext";

const Classroom = () => {
  const location = useLocation();
  const data = location.state?.data;

  const [errors, setErrors, messages, setMessages] = useContext(UserContext);

  const [body, setMessageBody] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(body);

    fetch("/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        body,
        classroom_id: data.id,
      }),
    }).then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          setMessages([...messages, data]);
        });
      } else {
        res.json().then((err) => setErrors(err.errors));
        console.log(errors);
      }
    });
  }

  return (
    <div>
      <h1 className=" text-center text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
        {data.name} Chatroom
      </h1>
      <div className="w-1/2 h-96 mt-10 border-2 border-blue-500 rounded-md mx-auto">
        Sample
      </div>
      <div className="w-1/2 border-2 border-blue-500 bg-blue-500 text-white rounded-md mx-auto ">
        <form onSubmit={handleSubmit}>
          <input
            className="border-2 border-white rounded-md text-black w-3/4 ml-20 pl-2"
            type="text"
            name="message"
            value={body}
            onChange={(e) => setMessageBody(e.target.value)}
          />
          <button
            className="my-2 mx-4 hover:bg-white hover:text-blue-500 border-white border-2 p-1 rounded-md"
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
