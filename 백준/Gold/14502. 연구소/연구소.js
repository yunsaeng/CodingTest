const fs = require("fs");

// 입력 파일 경로 설정 (동적으로 인자로 받은 파일 또는 백준 환경)
const inputPath = process.argv[2] || "/dev/stdin";
const input = fs.readFileSync(inputPath).toString().trim().split("\n");

function solve() {
  const [N, M] = input[0].split(" ").map(Number);
  const board = input.slice(1).map((line) => line.split(" ").map(Number));

  const space = [];
  const virus = [];
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (board[i][j] === 0) {
        space.push([i, j]);
      } else if (board[i][j] === 2) {
        virus.push([i, j]);
      }
    }
  }

  const getCombinations = (arr, n) =>
    n === 1
      ? arr.map((v) => [v])
      : arr.flatMap((v, i) =>
          getCombinations(arr.slice(i + 1), n - 1).map((c) => [v, ...c]),
        );

  const spaceComb = getCombinations(space, 3);

  const dir = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  let result = Infinity;
  for (const comb of spaceComb) {
    const temp = board.map((row) => [...row]);
    for (const [r, c] of comb) temp[r][c] = 1;

    let tempCnt = 0;
    const virusQueue = [...virus];
    while (virusQueue.length > 0) {
      const [r, c] = virusQueue.shift();
      for (const [dr, dc] of dir) {
        const nr = r + dr;
        const nc = c + dc;
        if (nr >= 0 && nr < N && nc >= 0 && nc < M && temp[nr][nc] === 0) {
          temp[nr][nc] = 2;
          virusQueue.push([nr, nc]);
          tempCnt++;
        }
      }
    }

    if (result > tempCnt) result = tempCnt;
  }

  return space.length - result - 3;
}

console.log(solve());