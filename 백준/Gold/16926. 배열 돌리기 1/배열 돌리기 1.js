const fs = require("fs");

// 입력 파일 경로 설정 (동적으로 인자로 받은 파일 또는 백준 환경)
const inputPath = process.argv[2] || "/dev/stdin";
const input = fs.readFileSync(inputPath).toString().trim().split("\n");

function solve() {
  const it = input.values();
  const [N, M, R] = it.next().value.split(" ").map(Number);
  let board = input.slice(1).map((line) => line.split(" ").map(Number));

  const loops = Math.min(N, M) / 2;
  for (let depth = 0; depth < loops; depth++) {
    const minRow = depth;
    const maxRow = N - 1 - depth;
    const minCol = depth;
    const maxCol = M - 1 - depth;

    const layer = [];
    for (let col = minCol; col < maxCol; col++) layer.push(board[minRow][col]);
    for (let row = minRow; row < maxRow; row++) layer.push(board[row][maxCol]);
    for (let col = maxCol; col > minCol; col--) layer.push(board[maxRow][col]);
    for (let row = maxRow; row > minRow; row--) layer.push(board[row][minCol]);

    const len = layer.length;
    const rotate = R % len;
    const rotatedLayer = [...layer.slice(rotate), ...layer.slice(0, rotate)];

    let idx = 0;
    for (let col = minCol; col < maxCol; col++)
      board[minRow][col] = rotatedLayer[idx++];
    for (let row = minRow; row < maxRow; row++)
      board[row][maxCol] = rotatedLayer[idx++];
    for (let col = maxCol; col > minCol; col--)
      board[maxRow][col] = rotatedLayer[idx++];
    for (let row = maxRow; row > minRow; row--)
      board[row][minCol] = rotatedLayer[idx++];
  }

  return board.map((row) => row.join(" ")).join("\n");
}

console.log(solve());