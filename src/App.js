
import React, { useState } from "react";

import HomePage from "./Design/homepage";
import GradingPage from "./pages/GradingPage";

function App() {
  const [page, setPage] = useState("home");

  return (
    <div className="App">
      {page === "home" && (
        <HomePage
          onStart={() => setPage("grading")}
        />
      )}

      {page === "grading" && (
        <GradingPage
          onBack={() => setPage("home")}
        />
      )}
    </div>
  );
}

export default App;
