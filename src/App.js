import React from "react";
import "./App.css";
import Instructions from "./components/Instructions.js";
import TicTacToe from "./components/TicTacToe";

const App = () => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <TicTacToe />
      <Instructions />
    </div>
  );
};

export default App;
