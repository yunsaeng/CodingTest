const fs = require("fs");

// 입력 파일 경로 설정 (동적으로 인자로 받은 파일 또는 백준 환경)
const inputPath = process.argv[2] || "/dev/stdin";
const input = fs.readFileSync(inputPath).toString().trim().split("\n");

function solve() {
  const tempBoard = input.map((row) => row.split(""));
  let board = tempBoard[0].map((_, i) => tempBoard.map((row) => row[i]));

  const dir = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  const getPuyo = (r, c, visited, color) => {
    const puyo = [[r, c]];
    let head = 0;

    visited[r][c] = true;

    while (head < puyo.length) {
      const [cr, cc] = puyo[head++];

      for (const [dr, dc] of dir) {
        const nr = cr + dr;
        const nc = cc + dc;

        if (
          nr >= 0 &&
          nr < 6 &&
          nc >= 0 &&
          nc < 12 &&
          !visited[nr][nc] &&
          board[nr][nc] === color
        ) {
          puyo.push([nr, nc]);
          visited[nr][nc] = true;
        }
      }
    }

    return puyo;
  };

  const refreshBoard = (puyo) => {
    for (const [r, c] of puyo) {
      board[r][c] = ".";
    }

    board = board.map((row) =>
      row
        .filter((e) => e !== ".")
        .join("")
        .padStart(12, ".")
        .split(""),
    );
  };

  let result = 0;
  while (true) {
    const visited = Array.from({ length: 6 }, () => Array(12).fill(false));
    let toPop = [];

    for (let r = 0; r < 6; r++) {
      for (let c = 0; c < 12; c++) {
        if (board[r][c] !== "." && !visited[r][c]) {
          const puyo = getPuyo(r, c, visited, board[r][c]);
          if (puyo.length >= 4) {
            toPop.push(...puyo);
          }
        }
      }
    }

    if (toPop.length === 0) break;

    refreshBoard(toPop);
    result++;
  }

  return result;
}

console.log(solve());