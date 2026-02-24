const fs = require("fs");

// 입력 파일 경로 설정 (동적으로 인자로 받은 파일 또는 백준 환경)
const inputPath = process.argv[2] || "/dev/stdin";
const input = fs.readFileSync(inputPath).toString().trim().split("\n");

function solve() {
  const [N, L, R] = input[0].split(" ").map(Number);
  const board = input.slice(1).map((row) => row.split(" ").map(Number));
  const dir = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  let time = 0;
  while (true) {
    const visited = Array.from({ length: N }, () => Array(N).fill(false));
    const unions = [];

    const dfs = (r, c) => {
      const result = [[r, c]];
      visited[r][c] = true;

      for (const [dr, dc] of dir) {
        const nr = r + dr;
        const nc = c + dc;

        if (nr >= 0 && nr < N && nc >= 0 && nc < N && !visited[nr][nc]) {
          const diff = Math.abs(board[nr][nc] - board[r][c]);

          if (diff >= L && diff <= R) {
            const temp = dfs(nr, nc);
            result.push(...temp);
          }
        }
      }

      return result;
    };

    for (let r = 0; r < N; r++) {
      for (let c = 0; c < N; c++) {
        if (!visited[r][c]) {
          const union = dfs(r, c);
          unions.push(union);
        }
      }
    }

    if (unions.length === N * N) break;

    for (const union of unions) {
      if (union.length === 1) continue;

      const sum = union.reduce((acc, [r, c]) => acc + board[r][c], 0);
      for (const [r, c] of union) board[r][c] = Math.floor(sum / union.length);
    }

    time++;
  }

  return time;
}

console.log(solve());