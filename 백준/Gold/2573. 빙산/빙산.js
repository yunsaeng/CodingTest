const fs = require("fs");

// 입력 파일 경로 설정 (동적으로 인자로 받은 파일 또는 백준 환경)
const inputPath = process.argv[2] || "/dev/stdin";
const input = fs.readFileSync(inputPath).toString().trim().split("\n");

function solve() {
  const [N, M] = input[0].split(" ").map(Number);
  let board = input.slice(1).map((row) => row.split(" ").map(Number));

  const dir = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  let year = 0;
  while (true) {
    const newBoard = board.map((row) => [...row]);
    const visited = Array.from({ length: N }, () => Array(M).fill(false));

    const bfs = (row, col) => {
      const queue = [[row, col]];
      visited[row][col] = true;

      while (queue.length > 0) {
        const [r, c] = queue.shift();
        let cnt = 0;

        for (const [dr, dc] of dir) {
          const nr = r + dr;
          const nc = c + dc;

          if (nr >= 0 && nr < N && nc >= 0 && nc < M) {
            if (!visited[nr][nc] && board[nr][nc] !== 0) {
              queue.push([nr, nc]);
              visited[nr][nc] = true;
            }

            if (board[nr][nc] === 0) cnt++;
          }
        }

        newBoard[r][c] = Math.max(board[r][c] - cnt, 0);
      }
    };

    let areaNum = 0;
    let isEmpty = true;
    for (let row = 0; row < N; row++) {
      for (let col = 0; col < M; col++) {
        if (board[row][col] !== 0 && !visited[row][col]) {
          bfs(row, col);
          areaNum++;
          isEmpty = false;
        }
      }
    }

    if (isEmpty) return 0;
    if (areaNum > 1) break;

    board = newBoard;
    year++;
  }

  return year;
}

console.log(solve());