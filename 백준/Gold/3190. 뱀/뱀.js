const fs = require("fs");

// 입력 파일 경로 설정 (동적으로 인자로 받은 파일 또는 백준 환경)
const inputPath = process.argv[2] || "/dev/stdin";
const input = fs.readFileSync(inputPath).toString().trim().split("\n");

function solve() {
  const it = input.values();

  const N = +it.next().value;

  const K = +it.next().value;
  const isApple = Array.from({ length: N }, () => Array(N).fill(false));
  for (let i = 0; i < K; i++) {
    const [r, c] = it.next().value.split(" ").map(Number);
    isApple[r - 1][c - 1] = true;
  }

  const L = +it.next().value;
  const changeDirections = [];
  for (let i = 0; i < L; i++) {
    const [X, C] = it.next().value.split(" ");
    changeDirections.push([+X, C]);
  }
  changeDirections.sort((a, b) => a[0] - b[0]);

  const dir = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  let dirIdx = 0;

  const snake = [[0, 0]];
  let tail = 0;

  const isSnake = Array.from({ length: N }, () => Array(N).fill(false));
  isSnake[0][0] = true;

  let time = 0;
  while (true) {
    time++;

    const [r, c] = snake[snake.length - 1];
    const [dr, dc] = dir[dirIdx];
    const nr = r + dr;
    const nc = c + dc;

    if (nr < 0 || nr >= N || nc < 0 || nc >= N || isSnake[nr][nc]) break;

    snake.push([nr, nc]);
    isSnake[nr][nc] = true;
    if (isApple[nr][nc]) {
      isApple[nr][nc] = false;
    } else {
      const [tr, tc] = snake[tail];
      isSnake[tr][tc] = false;
      tail++;
    }

    if (changeDirections.length !== 0 && time === changeDirections[0][0]) {
      const [X, C] = changeDirections.shift();

      if (C === "L") dirIdx = (dirIdx + 3) % 4;
      else if (C === "D") dirIdx = (dirIdx + 1) % 4;
    }
  }

  return time;
}

console.log(solve());