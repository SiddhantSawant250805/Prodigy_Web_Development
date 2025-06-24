const board = document.getElementById("board");
const statusText = document.getElementById("status");
const resetBtn = document.getElementById("resetBtn");

let currentPlayer = "X";
let cells = Array(9).fill("");
let gameActive = true;

const winningCombos = [
  [0,1,2], [3,4,5], [6,7,8],
  [0,3,6], [1,4,7], [2,5,8],
  [0,4,8], [2,4,6]
];

function checkWinner() {
  for (let combo of winningCombos) {
    const [a, b, c] = combo;
    if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
      gameActive = false;
      statusText.textContent = `🎉 Winner: ${cells[a]}!`;
      highlightWin(combo);
      return;
    }
  }

  if (!cells.includes("")) {
    statusText.textContent = "It's a draw! 🤝";
    gameActive = false;
  }
}

function highlightWin(combo) {
  combo.forEach(i => {
    board.children[i].style.background = "rgba(76, 175, 80, 0.6)";
    board.children[i].style.transform = "scale(1.1)";
  });
}

function handleCellClick(e) {
  const index = [...board.children].indexOf(e.target);
  if (!gameActive || cells[index]) return;
  cells[index] = currentPlayer;
  e.target.textContent = currentPlayer;
  checkWinner();
  currentPlayer = currentPlayer === "X" ? "O" : "X";
  if (gameActive) statusText.textContent = `Next Turn: ${currentPlayer}`;
}

function resetGame() {
  cells = Array(9).fill("");
  currentPlayer = "X";
  gameActive = true;
  statusText.textContent = "Next Turn: X";
  board.innerHTML = "";
  initBoard();
}

function initBoard() {
  for (let i = 0; i < 9; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.textContent = "";
    cell.addEventListener("click", handleCellClick);
    board.appendChild(cell);
  }
}

resetBtn.addEventListener("click", resetGame);
initBoard();
