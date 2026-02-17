const fs = require("fs");

// 입력 파일 경로 설정 (동적으로 인자로 받은 파일 또는 백준 환경)
const inputPath = process.argv[2] || "/dev/stdin";
const input = fs.readFileSync(inputPath).toString().trim().split("\n");

function solve() {
  const it = input.values();
  const [N, K] = it.next().value.split(" ").map(Number);
  const virus = Array.from({ length: K + 1 }, () => []);

  const board = [];
  for (let i = 0; i < N; i++) {
    board.push(it.next().value.split(" ").map(Number));
    for (let j = 0; j < N; j++) {
      let cur = board[i][j];
      if (cur !== 0) {
        virus[cur].push([i, j]);
      }
    }
  }

  const [S, X, Y] = it.next().value.split(" ").map(Number);

  const dir = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  for (let time = 1; time <= S; time++) {
    for (let v = 1; v <= K; v++) {
      const newVirus = [];
      for (const [x, y] of virus[v]) {
        for (const [dx, dy] of dir) {
          const nx = x + dx;
          const ny = y + dy;
          if (nx >= 0 && nx < N && ny >= 0 && ny < N && board[nx][ny] === 0) {
            board[nx][ny] = v;
            newVirus.push([nx, ny]);
          }
        }
      }
      virus[v] = newVirus;
    }
  }

  return board[X - 1][Y - 1];
}

console.log(solve());