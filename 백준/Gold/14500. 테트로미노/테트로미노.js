const fs = require("fs");

// 입력 파일 경로 설정 (동적으로 인자로 받은 파일 또는 백준 환경)
const inputPath = process.argv[2] || "/dev/stdin";
const input = fs.readFileSync(inputPath).toString().trim().split("\n");

function solve() {
  const [N, M] = input[0].split(" ").map(Number);
  const board = input.slice(1).map((line) => line.split(" ").map(Number));

  const visited = Array.from({ length: N }, () => Array(M).fill(false));
  const dir = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  let result = -Infinity;

  const dfs = (r, c, depth, sum) => {
    if (depth === 4) {
      result = Math.max(result, sum);
      return;
    }

    for (const [dr, dc] of dir) {
      const nr = r + dr;
      const nc = c + dc;

      if (nr >= 0 && nr < N && nc >= 0 && nc < M && !visited[nr][nc]) {
        visited[nr][nc] = true;
        dfs(nr, nc, depth + 1, sum + board[nr][nc]);
        visited[nr][nc] = false;
      }
    }
  };

  const checkTShape = (r, c) => {
    const tShapes = [
      [
        [0, 0],
        [0, 1],
        [0, -1],
        [1, 0],
      ], // ㅜ
      [
        [0, 0],
        [0, 1],
        [0, -1],
        [-1, 0],
      ], // ㅗ
      [
        [0, 0],
        [1, 0],
        [-1, 0],
        [0, 1],
      ], // ㅏ
      [
        [0, 0],
        [1, 0],
        [-1, 0],
        [0, -1],
      ], // ㅓ
    ];

    for (const t of tShapes) {
      let sum = 0;
      let isValid = true;

      for (const [dr, dc] of t) {
        const nr = r + dr;
        const nc = c + dc;

        if (nr < 0 || nr >= N || nc < 0 || nc >= M) {
          isValid = false;
          break;
        }

        sum += board[nr][nc];
      }

      if (isValid) result = Math.max(result, sum);
    }
  };

  for (let r = 0; r < N; r++) {
    for (let c = 0; c < M; c++) {
      visited[r][c] = true;
      dfs(r, c, 1, board[r][c]);
      visited[r][c] = false;

      checkTShape(r, c);
    }
  }

  return result;
}

console.log(solve());