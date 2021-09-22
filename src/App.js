import React, { useState } from "react";
import "./App.css";
import Instructions from "./components/Instructions.js";
import { createGrid, winningCombos } from "./util/helpers";

const TicTacToe = () => {
  const [currentPlayer, setCurrentPlayer] = useState("Player 1");
  const [currentLetter, setCurrentLetter] = useState("X");
  const [grid, setGrid] = useState(createGrid());
  const [winner, setWinner] = useState(null);
  const [clicks, setClicks] = useState(0);

  const handleClick = (id, value, row) => {
    if (value || winner) return;

    currentPlayer === "Player 1"
      ? setCurrentPlayer("Player 2")
      : setCurrentPlayer("Player 1");

    currentLetter === "X" ? setCurrentLetter("O") : setCurrentLetter("X");

    const indexInRow = grid[row].findIndex((item) => item.id === id);

    grid[row][indexInRow].value = currentLetter;
    setGrid(grid);
    checkWinner(grid);
    setClicks(clicks + 1);
  };

  const checkWinner = (grid) => {
    const flatGrid = grid.flat();

    winningCombos.forEach((combo) => {
      let oCount = 0;
      let xCount = 0;
      combo.forEach((id) => {
        const { value } = flatGrid[id];
        if (value) {
          value === "O" ? oCount++ : xCount++;
        }
        if (xCount === 3) {
          setWinner("Player 1");
        }
        if (oCount === 3) {
          setWinner("Player 2");
        }
        if (!winner && clicks === 9) {
          setWinner("It's a Draw");
        }
      });
    });
  };

  const reset = () => {
    setCurrentPlayer("Player 1");
    setGrid(createGrid());
    setWinner(null);
    setClicks(0);
  };

  const renderRow = (row) => (
    <div className="row">
      {grid[row].map(({ className, id, value }) => {
        return (
          <div
            className={
              // default pointer if there is a winner or letter
              value || winner ? `${className} no-pointer` : className
            }
            id={id}
            onClick={() => handleClick(id, value, row)}
          >
            {value}
          </div>
        );
      })}
    </div>
  );

  return (
    <div className="outer-container">
      <div className="inner-container">
        {renderRow(0)}
        {renderRow(1)}
        {renderRow(2)}
      </div>
      <div>
        {!winner && <p>Next player: {currentPlayer}</p>}
        {winner && winner !== `It's a Draw` && <p> Winner: {winner}</p>}
        {winner === `It's a Draw` && <p>It's a draw</p>}

        <button onClick={reset}>Start Over</button>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <TicTacToe />
      <Instructions />
    </div>
  );
};

export default App;
