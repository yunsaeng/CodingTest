const fs = require("fs");

// 입력 파일 경로 설정 (동적으로 인자로 받은 파일 또는 백준 환경)
const inputPath = process.argv[2] || "/dev/stdin";
const input = fs.readFileSync(inputPath).toString().trim().split("\n");

function solve() {
  const N = +input[0];
  const board = input.slice(1).map((row) => row.split(" ").map(Number));

  let sharkSize = 2;
  let eat = 0;
  let sharkRow = 0;
  let sharkCol = 0;
  for (let r = 0; r < N; r++) {
    for (let c = 0; c < N; c++) {
      if (board[r][c] === 9) {
        sharkRow = r;
        sharkCol = c;
        board[r][c] = 0;
      }
    }
  }

  const dir = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  const getNextTime = () => {
    const queue = [[sharkRow, sharkCol, 0]];
    let head = 0;

    const visited = Array.from({ length: N }, () => Array(N).fill(false));
    visited[sharkRow][sharkCol] = true;

    const feed = [];
    while (head < queue.length) {
      const [r, c, t] = queue[head++];

      for (const [dr, dc] of dir) {
        const nr = r + dr;
        const nc = c + dc;

        if (
          nr >= 0 &&
          nr < N &&
          nc >= 0 &&
          nc < N &&
          !visited[nr][nc] &&
          board[nr][nc] <= sharkSize
        ) {
          visited[nr][nc] = true;
          queue.push([nr, nc, t + 1]);

          if (board[nr][nc] > 0 && board[nr][nc] < sharkSize) {
            feed.push([nr, nc, t + 1]);
          }
        }
      }
    }

    if (feed.length > 0) {
      feed.sort((a, b) => a[2] - b[2] || a[0] - b[0] || a[1] - b[1]);

      const [r, c, t] = feed[0];

      sharkRow = r;
      sharkCol = c;
      board[r][c] = 0;

      eat++;
      if (eat === sharkSize) {
        sharkSize++;
        eat = 0;
      }

      return t;
    } else return -1;
  };

  let result = 0;
  while (true) {
    const time = getNextTime();

    if (time === -1) break;

    result += time;
  }

  return result;
}

console.log(solve());