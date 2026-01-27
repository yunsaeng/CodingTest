const fs = require("fs");

// 입력 파일 경로 설정 (동적으로 인자로 받은 파일 또는 백준 환경)
const inputPath = process.argv[2] || "/dev/stdin";
const input = fs.readFileSync(inputPath).toString().trim().split("\n");

function solve() {
  const [N, M] = input[0].split(" ").map(Number);
  const board = input.slice(1).map((line) => line.split(" ").map(Number));

  const home = [];
  const chicken = [];
  for (let x = 0; x < N; x++) {
    for (let y = 0; y < N; y++) {
      if (board[x][y] === 1) home.push([x, y]);
      if (board[x][y] === 2) chicken.push([x, y]);
    }
  }

  const getCombination = (arr, r) => {
    if (r === 1) return arr.map((v) => [v]);
    return arr.flatMap((v, i) =>
      getCombination(arr.slice(i + 1), r - 1).map((c) => [v, ...c]),
    );
  };

  const chickenCombo = getCombination(chicken, M);

  let result = Infinity;
  for (const combo of chickenCombo) {
    let temp = 0;
    for (const [hx, hy] of home) {
      let minDist = Infinity;
      for (const [cx, cy] of combo) {
        minDist = Math.min(minDist, Math.abs(cx - hx) + Math.abs(cy - hy));
      }
      temp += minDist;
    }
    result = Math.min(result, temp);
  }

  return result;
}

console.log(solve());