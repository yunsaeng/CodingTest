const fs = require("fs");

// 입력 파일 경로 설정 (동적으로 인자로 받은 파일 또는 백준 환경)
const inputPath = process.argv[2] || "/dev/stdin";
const input = fs.readFileSync(inputPath).toString().trim().split("\n");

function solve() {
  const it = input.values();
  const [N, M] = it.next().value.split(" ").map(Number);

  const board = [];
  for (let i = 0; i < N; i++) {
    board.push(it.next().value.split(" ").map(Number));
  }

  const dir = [
    [],
    [0, -1],
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, 1],
    [1, 1],
    [1, 0],
    [1, -1],
  ];
  let position = [
    [N - 2, 0],
    [N - 2, 1],
    [N - 1, 0],
    [N - 1, 1],
  ];
  for (let i = 0; i < M; i++) {
    const [d, s] = it.next().value.split(" ").map(Number);
    const [dr, dc] = dir[d];
    const drs = dr * s;
    const dcs = dc * s;

    const visited = Array.from({ length: N }, () => Array(N).fill(false));
    for (let i = 0; i < position.length; i++) {
      let [r, c] = position[i];
      r = (((r + drs) % N) + N) % N;
      c = (((c + dcs) % N) + N) % N;
      position[i] = [r, c];
      board[r][c]++;
      visited[r][c] = true;
    }

    for (const [r, c] of position) {
      for (let i = 2; i < dir.length; i += 2) {
        const [dr, dc] = dir[i];
        const nr = r + dr;
        const nc = c + dc;
        if (nr >= 0 && nr < N && nc >= 0 && nc < N && board[nr][nc] !== 0) {
          board[r][c]++;
        }
      }
    }

    position = [];
    for (let r = 0; r < N; r++) {
      for (let c = 0; c < N; c++) {
        if (!visited[r][c] && board[r][c] >= 2) {
          board[r][c] -= 2;
          position.push([r, c]);
        }
      }
    }
  }

  return board
    .map((row) => row.reduce((acc, cur) => acc + cur, 0))
    .reduce((acc, cur) => acc + cur, 0);
}

console.log(solve());