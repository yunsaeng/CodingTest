const fs = require("fs");

// 입력 파일 경로 설정 (동적으로 인자로 받은 파일 또는 백준 환경)
const inputPath = process.argv[2] || "/dev/stdin";
const input = fs.readFileSync(inputPath).toString().trim().split("\n");

function solve() {
  const [N, M] = input[0].split(" ").map(Number);
  const board = input.slice(1).map((line) => line.split(""));
  const temp = Array.from({ length: N }, () => Array(M).fill("."));
  const dir = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  const getS = (x, y, s) => {
    let next = s + 1;

    for (const [dirX, dirY] of dir) {
      const nextX = x + dirX * next;
      const nextY = y + dirY * next;

      if (
        nextX < 0 ||
        nextX >= N ||
        nextY < 0 ||
        nextY >= M ||
        board[nextX][nextY] !== "*"
      )
        return s;
    }

    return getS(x, y, next);
  };

  const print = (x, y, s) => {
    temp[x][y] = "*";

    for (let i = 1; i <= s; i++) {
      for (const [dirX, dirY] of dir) {
        const nextX = x + dirX * i;
        const nextY = y + dirY * i;
        temp[nextX][nextY] = "*";
      }
    }
  };

  const compare = () => {
    for (let x = 0; x < N; x++) {
      for (let y = 0; y < M; y++) {
        if (board[x][y] !== temp[x][y]) return false;
      }
    }
    return true;
  };

  const result = [];
  for (let x = 0; x < N; x++) {
    for (let y = 0; y < M; y++) {
      if (board[x][y] === "*") {
        const s = getS(x, y, 0);
        if (s > 0) {
          print(x, y, s);
          result.push(`${x + 1} ${y + 1} ${s}`);
        }
      }
    }
  }

  return compare() ? `${result.length}\n${result.join("\n")}` : -1;
}

console.log(solve());