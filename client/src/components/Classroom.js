import React, { useState, useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { UserContext } from "../context/userContext";

const Classroom = () => {
  const ws = new WebSocket("ws://localhost:3000/cable");

  const messagesContainer = document.getElementById("messages");

  const [currentUser] = useContext(UserContext);

  const location = useLocation();
  const data = location.state?.data;
  const classroomId = data.id;

  const [messages, setMessages] = useState([]);
  const [errors, setErrors] = useContext(UserContext);
  const [messageBody, setMessageBody] = useState("");

  ws.onopen = () => {
    console.log("connected to websocket server");

    ws.send(
      JSON.stringify({
        command: "subscribe",
        identifier: JSON.stringify({
          channel: "ChatChannel",
          id: currentUser.id,
        }),
      })
    );
  };

  ws.onmessage = (e) => {
    const data = JSON.parse(e.data);
    if (data.type === "ping") return;
    if (data.type === "welcome") return;
    if (data.type === "confirm_subscription") return;

    console.log(data);

    const newMessage = data.message;
    setMessagesAndScroll([...messages, newMessage]);
  };

  useEffect(() => {
    fetch(`/classroom/messages/${classroomId}`).then((res) => {
      if (res.ok) {
        res.json().then((dbmessages) => setMessagesAndScroll(dbmessages));
      }
    });
  }, [setMessages, classroomId]);

  function setMessagesAndScroll(data) {
    setMessages(data);
    if (!messagesContainer) return;
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }

  function handleSubmit(e) {
    e.preventDefault();

    fetch("/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: currentUser.id,
        body: messageBody,
        classroom_id: data.id,
      }),
    });

    setMessageBody("");
  }

  return (
    <div>
      <h1 className=" text-center text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
        {data.name} Chatroom
      </h1>
      <p> User ID: {currentUser.id}</p>
      <div
        id="messages"
        className="w-1/2 h-96 mt-10 border-2 border-blue-500 rounded-md mx-auto"
      >
        {messages.map((message) => (
          <div key={message.id}>
            <p>{message.body}</p>
          </div>
        ))}
      </div>
      <div className="w-1/2 border-2 border-blue-500 bg-blue-500 text-white rounded-md mx-auto ">
        <form onSubmit={handleSubmit}>
          <input
            className="border-2 border-white rounded-md text-black w-3/4 ml-20 pl-2"
            type="text"
            name="message"
            value={messageBody}
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
