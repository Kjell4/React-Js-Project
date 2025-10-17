import React, { useState } from "react";
import "./App.css";

function App() {

  return (
    <div className="app">
      <h1>Vacancies</h1>

      <input
        type="text"
        placeholder="Search by title"
        className="search-input"
      />

    </div>
  );
}

export default App;
