const fs = require("fs");

// 입력 파일 경로 설정 (동적으로 인자로 받은 파일 또는 백준 환경)
const inputPath = process.argv[2] || "/dev/stdin";
const input = fs.readFileSync(inputPath).toString().trim().split("\n");

function solve() {
  const [R, C] = input[0].split(" ").map(Number);
  let board = input.slice(1).map((row) => row.split(" ").map(Number));
  const dir = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  let time = 0;
  let lastCheeseCount = 0;

  const meltCheese = () => {
    const visited = Array.from({ length: R }, () => Array(C).fill(false));
    const queue = [[0, 0]];
    visited[0][0] = true;

    let head = 0;
    let meltedCount = 0;

    while (head < queue.length) {
      const [r, c] = queue[head++];

      for (const [dr, dc] of dir) {
        const nr = r + dr;
        const nc = c + dc;

        if (nr >= 0 && nr < R && nc >= 0 && nc < C && !visited[nr][nc]) {
          visited[nr][nc] = true;

          if (board[nr][nc] === 0) queue.push([nr, nc]);
          else {
            board[nr][nc] = 0;
            meltedCount++;
          }
        }
      }
    }

    return meltedCount;
  };

  while (true) {
    const meltedCount = meltCheese();

    if (meltedCount === 0) break;

    lastCheeseCount = meltedCount;
    time++;
  }

  return `${time}\n${lastCheeseCount}`;
}

console.log(solve());