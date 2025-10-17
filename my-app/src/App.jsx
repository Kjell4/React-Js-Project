import React, { useState } from "react";
import JobList from "./JobList/JobList";
import "./App.css";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="app">
      <h1>Vacancies</h1>

      <input
        type="text"
        placeholder="Search by title..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-input"
      />

      <JobList searchQuery={searchQuery} />
    </div>
  );
}

export default App;
