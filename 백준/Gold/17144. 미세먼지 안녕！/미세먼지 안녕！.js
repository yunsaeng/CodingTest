const fs = require("fs");

// 입력 파일 경로 설정 (동적으로 인자로 받은 파일 또는 백준 환경)
const inputPath = process.argv[2] || "/dev/stdin";
const input = fs.readFileSync(inputPath).toString().trim().split("\n");

function solve() {
  const [R, C, T] = input[0].split(" ").map(Number);
  let board = input.slice(1).map((row) => row.split(" ").map(Number));
  const cleaner = [];
  for (let r = 0; r < R; r++) if (board[r][0] === -1) cleaner.push(r);

  const dir = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  const spread = () => {
    const newBoard = board.map((row) => [...row]);

    for (let r = 0; r < R; r++) {
      for (let c = 0; c < C; c++) {
        const cur = board[r][c];
        if (cur >= 5) {
          for (const [dr, dc] of dir) {
            const nr = r + dr;
            const nc = c + dc;
            if (
              nr >= 0 &&
              nr < R &&
              nc >= 0 &&
              nc < C &&
              board[nr][nc] !== -1
            ) {
              const temp = Math.floor(cur / 5);
              newBoard[r][c] -= temp;
              newBoard[nr][nc] += temp;
            }
          }
        }
      }
    }

    return newBoard;
  };

  const clean = () => {
    const [cs, ce] = cleaner;

    const rotate1 = [0];
    let idx1 = 0;

    for (let c = 1; c < C - 1; c++) rotate1.push(board[cs][c]);
    for (let r = cs; r > 0; r--) rotate1.push(board[r][C - 1]);
    for (let c = C - 1; c > 0; c--) rotate1.push(board[0][c]);
    for (let r = 0; r < cs; r++) rotate1.push(board[r][0]);

    for (let c = 1; c < C - 1; c++) board[cs][c] = rotate1[idx1++];
    for (let r = cs; r > 0; r--) board[r][C - 1] = rotate1[idx1++];
    for (let c = C - 1; c > 0; c--) board[0][c] = rotate1[idx1++];
    for (let r = 0; r < cs; r++) board[r][0] = rotate1[idx1++];

    const rotate2 = [0];
    let idx2 = 0;

    for (let c = 1; c < C - 1; c++) rotate2.push(board[ce][c]);
    for (let r = ce; r < R - 1; r++) rotate2.push(board[r][C - 1]);
    for (let c = C - 1; c > 0; c--) rotate2.push(board[R - 1][c]);
    for (let r = R - 1; r > ce; r--) rotate2.push(board[r][0]);

    for (let c = 1; c < C - 1; c++) board[ce][c] = rotate2[idx2++];
    for (let r = ce; r < R - 1; r++) board[r][C - 1] = rotate2[idx2++];
    for (let c = C - 1; c > 0; c--) board[R - 1][c] = rotate2[idx2++];
    for (let r = R - 1; r > ce; r--) board[r][0] = rotate2[idx2++];
  };

  for (let t = 0; t < T; t++) {
    board = spread();
    clean();
  }

  return board.reduce((acc, row) => {
    return (
      acc +
      row.reduce((rowAcc, rowCur) => rowAcc + (rowCur > 0 ? rowCur : 0), 0)
    );
  }, 0);
}

console.log(solve());