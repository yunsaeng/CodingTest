const fs = require("fs");

// 입력 파일 경로 설정 (동적으로 인자로 받은 파일 또는 백준 환경)
const inputPath = process.argv[2] || "/dev/stdin";
const input = fs.readFileSync(inputPath).toString().trim().split("\n");

function solve() {
  const it = input.values();

  const result = [];

  const T = +it.next().value;
  for (let tc = 1; tc <= T; tc++) {
    const [n, d] = it.next().value.split(" ").map(Number);
    let board = [];
    for (let i = 0; i < n; i++)
      board.push(it.next().value.split(" ").map(Number));

    const rotate45 = () => {
      const newBoard = board.map((row) => [...row]);
      const mid = Math.floor(n / 2);

      for (let row = 0; row < n; row++) {
        newBoard[row][mid] = board[row][row];
        newBoard[row][n - 1 - row] = board[row][mid];
        newBoard[mid][n - 1 - row] = board[row][n - 1 - row];
        newBoard[row][row] = board[mid][row];
      }

      return newBoard;
    };

    const step = (((d % 360) + 360) % 360) / 45;
    for (let s = 0; s < step; s++) board = rotate45();

    result.push(...board.flatMap((row) => row.join(" ")));
  }

  return result.join("\n");
}

console.log(solve());