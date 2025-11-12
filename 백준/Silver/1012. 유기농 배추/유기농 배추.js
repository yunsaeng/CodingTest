const fs = require("fs");

// 입력 파일 경로 설정 (동적으로 인자로 받은 파일 또는 백준 환경)
const inputPath = process.argv[2] || "/dev/stdin";
const input = fs.readFileSync(inputPath).toString().trim().split("\n");

// 문제 해결 로직
function solve() {
  const it = input.values();
  const T = it.next().value;

  const result = [];
  for (let tc = 0; tc < T; tc++) {
    const [M, N, K] = it.next().value.split(" ").map(Number);

    const board = Array.from({ length: M }, () => Array(N).fill(false));
    for (let i = 0; i < K; i++) {
      const [x, y] = it.next().value.split(" ").map(Number);
      board[x][y] = true;
    }

    const visited = Array.from({ length: M }, () => Array(N).fill(false));
    const dir = [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1],
    ];
    const dfs = (x, y) => {
      visited[x][y] = true;

      for (const [dirX, dirY] of dir) {
        const nx = x + dirX;
        const ny = y + dirY;

        if (
          nx < M &&
          nx >= 0 &&
          ny < N &&
          ny >= 0 &&
          !visited[nx][ny] &&
          board[nx][ny]
        ) {
          dfs(nx, ny);
        }
      }
    };

    let temp = 0;
    for (let i = 0; i < M; i++) {
      for (let j = 0; j < N; j++) {
        if (board[i][j] && !visited[i][j]) {
          dfs(i, j);
          temp += 1;
        }
      }
    }

    result.push(temp);
  }

  return result.join("\n");
}

console.log(solve());