const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin, // 백준 제출 시
  // input: fs.createReadStream("./example.txt"), // 로컬 테스트용
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  solution(input);
  process.exit();
});

function solution(input) {
  const n = +input[0];
  const bamboo = input.slice(1).map((line) => line.split(" ").map(Number));
  const dp = Array.from({ length: n }, () => Array(n).fill(0));
  const dir = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  const dfs = (row, col) => {
    if (dp[row][col]) return dp[row][col];

    dp[row][col] = 1;
    for (let i = 0; i < 4; i++) {
      const [dr, dc] = dir[i];
      const nr = row + dr;
      const nc = col + dc;

      if (
        nr >= 0 &&
        nr < n &&
        nc >= 0 &&
        nc < n &&
        bamboo[nr][nc] > bamboo[row][col]
      ) {
        dp[row][col] = Math.max(dp[row][col], dfs(nr, nc) + 1);
      }
    }
    return dp[row][col];
  };

  let result = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      result = Math.max(result, dfs(i, j));
    }
  }

  console.log(result);
}