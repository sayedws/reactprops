// src/App.js
import React from "react";
import PlayersList from "./PlayersList";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Player List</h1>
      <PlayersList />
    </div>
  );
}

export default App;

