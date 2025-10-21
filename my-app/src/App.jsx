import React, { useState } from "react";
import JobList from "./JobList/JobList";
import "./App.css";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleClear = () => setSearchQuery("");

  return (
    <div className="app">
      <h1 className="app-title">Vacancies</h1>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search by title"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />

        <button onClick={handleClear} className="clear-btn"> Clear </button>
      </div>

      <JobList searchQuery={searchQuery} />
    </div>
  );
}

export default App;

