const fs = require("fs");

// 입력 파일 경로 설정 (동적으로 인자로 받은 파일 또는 백준 환경)
const inputPath = process.argv[2] || "/dev/stdin";
const input = fs.readFileSync(inputPath).toString().trim().split("\n");

function solve() {
  const it = input.values();
  const [N, M] = it.next().value.split(" ").map(Number);
  let [r, c, d] = it.next().value.split(" ").map(Number);
  const board = input.slice(2).map((e) => e.split(" ").map(Number));
  const cleaned = Array.from({ length: N }, () => Array(M).fill(false));
  const dir = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];

  let result = 0;
  while (r >= 0 && r < N && c >= 0 && c < M && board[r][c] === 0) {
    if (!cleaned[r][c]) {
      cleaned[r][c] = true;
      result++;
    }

    let needClean = false;
    for (const [dr, dc] of dir) {
      const nr = r + dr;
      const nc = c + dc;
      if (
        nr >= 0 &&
        nr < N &&
        nc >= 0 &&
        nc < M &&
        board[nr][nc] === 0 &&
        !cleaned[nr][nc]
      ) {
        needClean = true;
        break;
      }
    }

    if (needClean) {
      d = (d + 3) % 4;
      const [dr, dc] = dir[d];
      const nr = r + dr;
      const nc = c + dc;

      if (
        nr >= 0 &&
        nr < N &&
        nc >= 0 &&
        nc < M &&
        board[nr][nc] === 0 &&
        !cleaned[nr][nc]
      ) {
        r = nr;
        c = nc;
      }
    } else {
      const temp = (d + 2) % 4;
      const [dr, dc] = dir[temp];
      r += dr;
      c += dc;
    }
  }

  return result;
}

console.log(solve());