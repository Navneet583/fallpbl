
import React, { useState } from "react";
import HomePage from "./Design/homepage";
import Chatbot from "./Design/chatbot";

function App() {
  const [page, setPage] = useState("home");

  return (
    <div className="App">
      {page === "home" && (
        <HomePage onStart={() => setPage("chatbot")} />
      )}

      {page === "chatbot" && (
        <Chatbot onBack={() => setPage("home")} />
      )}
    </div>
  );
}

export default App;
