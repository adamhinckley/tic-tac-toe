import React, { useState } from "react";
import { createGrid, winningCombos, styleWinningCombos } from "../util/helpers";

const TicTacToe = () => {
  const [currentPlayer, setCurrentPlayer] = useState("Player 1");
  const [currentLetter, setCurrentLetter] = useState("X");
  const [grid, setGrid] = useState(createGrid());
  const [winner, setWinner] = useState(null);
  const [clicks, setClicks] = useState(0);

  const handleClick = (id, value) => {
    if (value || winner) return;

    currentPlayer === "Player 1"
      ? setCurrentPlayer("Player 2")
      : setCurrentPlayer("Player 1");

    currentLetter === "X" ? setCurrentLetter("O") : setCurrentLetter("X");

    grid.flat()[id].value = currentLetter;
    setGrid(grid);
    checkWinner(grid);
    setClicks(clicks + 1);
  };

  const checkWinner = (grid) => {
    winningCombos.forEach((combo) => {
      let oCount = 0;
      let xCount = 0;
      combo.forEach((id) => {
        const { value } = grid.flat()[id];
        if (value) {
          value === "O" ? oCount++ : xCount++;
        }
        if (xCount === 3) {
          setWinner("Player 1");
          styleWinningCombos(combo);
        }
        if (oCount === 3) {
          setWinner("Player 2");
          styleWinningCombos(combo);
        }
        if (!winner && clicks === 9) {
          setWinner("It's a Draw");
        }
      });
    });
  };

  const reset = () => {
    setCurrentPlayer("Player 1");
    setCurrentLetter("X");
    setGrid(createGrid());
    setWinner(null);
    setClicks(0);
    grid.flat().forEach(({ id }) => {
      document.getElementById(id).style.backgroundColor = "";
    });
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
            onClick={() => handleClick(id, value)}
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

export default TicTacToe;
