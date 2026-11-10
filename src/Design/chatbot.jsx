
import React, { useState } from "react";
import "./chatbot.css";
import ReactMarkdown from "react-markdown";

function GradingPage({ onBack }) {
 const [message, setMessage] = useState("");
const [chats, setChats] = useState([]);
const [loading, setLoading] = useState(false);

  function sendMessage() {
  if (message.trim() === "") {
    return;
  }

  const ad = message;

  setChats((oldChats) => [
    ...oldChats,
    { text: ad, role: "user" }
  ]);

  setMessage("");

  fetch("https://fallpbl.onrender.com/grade", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ ad: ad })
  })
  .then((response) => response.json())
  .then((data) => {
    setChats((oldChats) => [
      ...oldChats,
      { text: data.feedback, role: "ai" }
    ]);
  })
  .catch((error) => {
    console.log(error);
  });
}

  return (
    <div className="chatPage">

      <div className="chatBox">

        <div className="chatHeader">
          <h2> AI Grader</h2>
          <button onClick={onBack}>Home</button>
        </div>

        <div className="chatMessages">
          <p className="welcome">
            Enter your text ad below to get it graded.
          </p>

          {chats.map((chat, index) => (
              <div
                key={index}
                className={
                  chat.role === "user"
                    ? "userMessage"
                    : "aiMessage"
                }
              >
                {chat.role === "ai" ? (
                  <ReactMarkdown>{chat.text}</ReactMarkdown>
                ) : (
                  chat.text
                )}
              </div>
            ))}

{loading && (
  <p className="aiMessage">Grading your ad...</p>
)}
        </div>

        <div className="chatInput">
          <textarea
            placeholder="Type your advertisement here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <button onClick={sendMessage} disabled={loading}>
            {loading ? "Grading..." : "Send"}
          </button>
        </div>

      </div>

    </div>
  );
}

export default GradingPage;
