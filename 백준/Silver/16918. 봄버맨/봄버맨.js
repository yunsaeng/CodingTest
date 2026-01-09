const fs = require("fs");

// 입력 파일 경로 설정 (동적으로 인자로 받은 파일 또는 백준 환경)
const inputPath = process.argv[2] || "/dev/stdin";
const input = fs.readFileSync(inputPath).toString().trim().split("\n");

// 문제 해결 로직
function solve() {
  const it = input.values();
  const [R, C, N] = it.next().value.split(" ").map(Number);

  if (N === 1) return input.slice(1).join("\n");
  if (N % 2 === 0) return Array(R).fill("O".repeat(C)).join("\n");

  let board = [];
  let cur = it.next();
  while (!cur.done) {
    board.push(cur.value.split(""));
    cur = it.next();
  }

  const dir = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  for (let time = 3; time <= N; time += 2) {
    const nextBoard = Array.from({ length: R }, () => Array(C).fill("O"));

    for (let r = 0; r < R; r++) {
      for (let c = 0; c < C; c++) {
        if (board[r][c] === "O") {
          nextBoard[r][c] = ".";

          for (const [dr, dc] of dir) {
            const nr = r + dr;
            const nc = c + dc;
            if (nr >= 0 && nr < R && nc >= 0 && nc < C) {
              nextBoard[nr][nc] = ".";
            }
          }
        }
      }
    }

    board = nextBoard;
  }

  return board.map((line) => line.join("")).join("\n");
}

console.log(solve());