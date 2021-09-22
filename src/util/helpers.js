export const createGrid = () => {
  let grid = [[], [], []];
  let count = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      grid[i][j] = {
        className: "grid-item",
        id: count,
        value: "",
      };
      count++;
    }
  }
  return grid;
};

export const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export const styleWinningCombos = (winningCombo) => {
  winningCombo.forEach((id) => {
    document.getElementById(id).style.backgroundColor = "#f8786c";
    console.log(document.getElementById(id));
  });
};
